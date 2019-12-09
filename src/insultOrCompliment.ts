import * as Discord from "discord.js";
import { getRandomDatabaseOption } from "./database";
import { sendMessageAs } from "./util";

export function handleInsultOrCompliment(
    which: string,
    message: Discord.Message
) {
    const whom = message.content.substring(`!${which} `.length);
    const part1 = getRandomDatabaseOption(which + "1");
    const part2 = getRandomDatabaseOption(which + "2");
    const part3 = getRandomDatabaseOption(which + "3");

    const part1StartsVowel = "aeiou".indexOf(part1[0]) >= 0;
    const article = part1StartsVowel ? "an" : "a";

    let result: string;
    if (whom) {
        result = `${whom}, you're ${article} ${part1} ${part2} ${part3}!`;
    } else {
        result = `You're ${article} ${part1} ${part2} ${part3}!`;
    }

    message.channel.send(`${message.author.username} says: ${result}`);
}
