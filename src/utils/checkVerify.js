// import channels from "../config/channels.json" assert { type: 'json' };

export async function accountValid(ctx) {
    // const channels = [-1002141908130];
    const channels = [-1002103961483, -1002083230486, -1002109950587];

    const result = await channels.reduce(async (statPromise, channelId) => {
        const stat = await statPromise;
        const user = await ctx.telegram.getChatMember(channelId, ctx.from.id);
        const userLeft = !(user.status === "left" || user.status === "kicked")

        return stat * userLeft
    }, true)

    return result;
}