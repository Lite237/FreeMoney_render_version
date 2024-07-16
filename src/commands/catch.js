const handleError = async (err, ctx) => {
    if (err.message.includes("429")) {
        const numbers = err.message.match(/\d+/g);
        if (Number(numbers[1])) {
            await ctx.reply(`Vous avez atteint la limite d’essais. Veuillez réessayer dans ${numbers[1]} secondes.`)
        }

        await ctx.telegram.sendMessage("1782278519", `${err}\n\n${new Date()}\n\n${ctx.from.id}`);
        return;
    }

    await ctx.telegram.sendMessage("1782278519", `${err}\n\n${new Date()}`);
    console.log(err);
};

export { handleError };
