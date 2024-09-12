import React, { useCallback, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { IPokemonConfig } from "../../../../../models/mongo-models/user-metadata"
import { PRECOMPUTED_EMOTIONS_PER_POKEMON_INDEX } from "../../../../../models/precomputed/precomputed-emotions"
import { Emotion } from "../../../../../types"
import {
  AnimationConfig,
  Pkm,
  PkmIndex
} from "../../../../../types/enum/Pokemon"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import {
  buyBooster,
  buyEmotion,
  changeAvatar,
  changeSelectedEmotion
} from "../../../stores/NetworkStore"
import { getAvatarSrc, getPortraitSrc } from "../../../utils"
import { cc } from "../../utils/jsx"
import { Modal } from "../modal/modal"
import PokemonEmotion from "./pokemon-emotion"
import "./pokemon-emotions-modal.css"

export default function PokemonEmotionsModal(props: {
  pokemon: Pkm
  onClose: () => void
}) {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const pokemonCollection = useAppSelector(
    (state) => state.network.profile?.pokemonCollection ?? new Map<string, IPokemonConfig>()
  )
  const user = useAppSelector((state) => state.network.profile)

  const index = PkmIndex[props.pokemon]

  const availableEmotions: Emotion[] = Object.values(Emotion).filter(
    (e, i) => PRECOMPUTED_EMOTIONS_PER_POKEMON_INDEX[index]?.[i] === 1
  )

  const shinyAvailable =
    AnimationConfig[props.pokemon]?.shinyUnavailable !== true

  const pConfig = useMemo(() => {
    const foundPokemon = pokemonCollection.get(index) ?? {
      dust: 0,
      emotions: [],
      shinyEmotions: [],
      selectedEmotion: Emotion.NORMAL,
      selectedShiny: false,
      id: "0000"
    }

    return foundPokemon
  }, [index, pokemonCollection])

  const handlePokemonEmotionClick = useCallback(
    (
      unlocked: boolean,
      update: { index: string; emotion: Emotion; shiny: boolean }
    ) => {
      if (unlocked) {
        dispatch(changeSelectedEmotion(update))
      } else {
        dispatch(buyEmotion(update))
      }
    },
    [dispatch]
  )

  return (
    <Modal
      show={true}
      onClose={props.onClose}
      className="pokemon-emotions-modal anchor-top"
      header={<>
        <img
          src={getPortraitSrc(
            index,
            pConfig.selectedShiny,
            pConfig.selectedEmotion
          )}
          className={cc({ unlocked: pConfig != null })}
        />
        <h2>{t(`pkm.${props.pokemon}`)}</h2>
        <div className="spacer" />
        <p className="dust">
          {pConfig.dust} {t("shards")}{" "}
          <img src={getPortraitSrc(index)} className="dust" alt="dust" />
        </p>
      </>}
      body={<>
        <section>
          <p>{t("normal_emotions")}</p>
          <div>
            {availableEmotions.map((e) => {
              return (
                <PokemonEmotion
                  key={e}
                  index={index}
                  shiny={false}
                  unlocked={pConfig && pConfig.emotions.includes(e)}
                  selected={
                    pConfig.selectedEmotion === e && !pConfig.selectedShiny
                  }
                  path={index.replace("-", "/")}
                  emotion={e}
                  dust={pConfig.dust}
                  onClick={() =>
                    handlePokemonEmotionClick(
                      pConfig && pConfig.emotions.includes(e),
                      { index: index, emotion: e, shiny: false }
                    )
                  }
                />
              )
            })}
          </div>
        </section>
        {shinyAvailable && (
          <section>
            <p>{t("shiny_emotions")}</p>
            <div>
              {availableEmotions.map((e) => {
                return (
                  <PokemonEmotion
                    key={e}
                    index={index}
                    shiny={true}
                    unlocked={pConfig && pConfig.shinyEmotions.includes(e)}
                    selected={
                      pConfig.selectedEmotion === e && pConfig.selectedShiny
                    }
                    path={`${index.replace("-", "/")}/0000/0001`}
                    emotion={e}
                    dust={pConfig.dust}
                    onClick={() =>
                      handlePokemonEmotionClick(
                        pConfig && pConfig.shinyEmotions.includes(e),
                        { index: index, emotion: e, shiny: true }
                      )
                    }
                  />
                )
              })}
            </div>
          </section>
        )}
      </>}
      footer={<>
        <button
          className="bubbly blue"
          disabled={
            (pConfig.emotions.length === 0 &&
              pConfig.shinyEmotions.length === 0) ||
            (user &&
              getAvatarSrc(user?.avatar) ===
              getPortraitSrc(
                index,
                pConfig.selectedShiny,
                pConfig.selectedEmotion
              ))
          }
          onClick={() =>
            dispatch(
              changeAvatar({
                index,
                emotion: pConfig.selectedEmotion,
                shiny: pConfig.selectedShiny
              })
            )
          }
        >
          {t("choose_as_avatar")}&nbsp;
          <img
            src={getPortraitSrc(
              index,
              pConfig.selectedShiny,
              pConfig.selectedEmotion
            )}
            alt="avatar"
          />
        </button>

        <button
          className="bubbly orange"
          disabled={pConfig.dust < 500}
          onClick={() => dispatch(buyBooster({ index }))}
        >
          {t("buy_booster_500")}
          <img src={getPortraitSrc(index)} className="dust" alt="dust" />
        </button>
        <div className="spacer"></div>
        <button className="bubbly red" onClick={props.onClose}>
          {t("close")}
        </button>
      </>}
    />
  )
}
