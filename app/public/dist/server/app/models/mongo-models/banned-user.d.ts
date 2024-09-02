export interface IBannedUser {
    uid: string;
    name: string;
    time: number;
    author: string;
}
declare const _default: import("mongoose").Model<IBannedUser, {}, {}, {}, import("mongoose").Document<unknown, {}, IBannedUser> & IBannedUser & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
export default _default;
