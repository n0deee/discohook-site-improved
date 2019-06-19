import { Message } from "./message/Message"

const dedent = (strings: TemplateStringsArray) =>
  strings
    .join("")
    .split(/\r?\n/)
    .map((string) => string.trim())
    .join("\n")
    .trim()

export const initialMessage: Message = {
  content: dedent`
    Hey, this is Discohook, a message builder for Discord webhooks. \\🔗
    You can read through my small introduction, or click **Clear all** on the top to get started.
    `,
  embeds: [
    {
      title: "What even?",
      description: dedent`
        So uhh, yeah, this is __Discohook__.

        This creates and sends messages for Discord's webhook feature, you can read more about it on [the support article](https://support.discordapp.com/hc/en-us/articles/228383668). \\👈
        In short, they exist to send messages to a channel from outside Discord. You create them in the channel settings, copy the link in here and go wild!

        This application serves to help you create and send messages like these to your own server!
        These messages can contain not only the usual content and maybe a file or two, but also have up to 10 embeds! \\✨
        `,
      color: 7506394,
    },
    {
      title: "Embeds?",
      description: dedent`
        Yeah, embeds. They look like this, you've been reading them.
        Unlike with bots, you can send multiple at a time without going through the hassle of sending multiple messages.

        Embeds can not only have a simple title and a description, but also up to 25 fields, an author, and more!
        In the editor on the left you can set all kinds of properties an embed can have with ease.
        You can see an embed with (almost) all fields set below. \\👇
        `,
      color: 4437377,
    },
    {
      author: {
        name: "Author who?",
        iconUrl: "https://cdn.discordapp.com/embed/avatars/4.png",
      },
      title: "Title (they can have links)",
      url: "https://discordapp.com/",
      description: dedent`
        If you're confused, you haven't been reading along.
        Embeds *can* have text, but don't tell anybody.
        Also, I forgot to tell you this earlier, but yes this does support [__***markdown***__](https://support.discordapp.com/hc/en-us/articles/210298617), even masked links like this: \`[name](link)\`.`,
      fields: [
        {
          name: "Embeds have fields",
          value: dedent`
            Crazy right?
            You can even have inline fields, like the ones below! \\⏬
            `,
        },
        {
          name: "Inline fields",
          value: "If you have enough room,",
          inline: true,
        },
        {
          name: "are cool!",
          value: "they appear next to each other",
          inline: true,
        },
        {
          name: "Embeds also support images",
          value:
            "But it makes your messages a little bulky, so I didn't add one.",
        },
      ],
      footer: {
        text: "Even a footer, with an icon and a timestamp",
        iconUrl: "https://cdn.discordapp.com/embed/avatars/4.png",
      },
      timestamp: "2019-04-22T11:02:04.000Z",
      color: 15746887,
      thumbnail: {
        url: "https://cdn.discordapp.com/embed/avatars/4.png",
      },
    },
    {
      title: "Backups!",
      description: dedent`
        As a little extra, there's also support for backups.
        To use them just click on the **Backups** button in the top of the editor!

        \\❗ Backups are stored locally, and will always be stored locally. This means that if you clear your browsers data your backups will be lost forever!
        `,
      color: 16426522,
    },
    {
      title: "\\⚠ The big disclaimer",
      description: dedent`
        This uses small bits of code from Discord to make messages appear as accurately as possible. This is not to infringe on Discord's rights, but to give more helpful visuals.
        Discohook is not affiliated with Discord in any way, shape, or form.

        The source code of this project is available at <https://github.com/jaylineko/discohook>, and licensed under an MIT license.
        `,
    },
  ],
}