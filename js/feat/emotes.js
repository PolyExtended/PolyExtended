function addEmotes(message, emotes, site, options) {
    for (let i = 0; i < emotes.length; i++) {
        const emote = emotes[i];
        const emoteCode = emote[0];
        const emoteUrl = emote[1];

        if (site === "beam" || (site === "twitch" && options.legacyemotes)) {
            const emoteRegex = new RegExp(`(\\s|^):${emoteCode}(?=\\s|$|<)`, "g");
            message = message.replace(emoteRegex, `$1<img src='${emoteUrl}' class='polyemote' title=':${emoteCode}'>`);
        }

        if (site === "twitch") {
            const emoteRegex = new RegExp(`(\\s|^)${emoteCode}(?=\\s|$)`, "g");
            message = message.replace(emoteRegex, `$1<img src='${emoteUrl}' class='emoticon tooltip polyemote' original-title='${emoteCode}'>`);
        }
    }

    return message;
}

var applyEmotesEvent = function () {};

onMessageAdd(function (mut, name, message, id) {
    applyEmotesEvent(mut, name, message, id);
});

$.get("//emotes.adamcy.pl/v1/channel/${channel}/emotes/all", function (twitchemotes) {
    $.get("//poly.x10.mx/emotes.json", function (emotes) {
        applyEmotesEvent = function (mut, name, message, id) {
            if (options.polyemotes) {
                var toemotes = [];

                for (let i = 0; i < emotes.global.length; i++) {
                    toemotes.push([emotes.global[i], "//poly.x10.mx/emotes/global/" + emotes.global[i] + ".png"]);
                }

                for (let i = 0; i < Object.keys(emotes.user).length; i++) {
                    if (name.toLowerCase() == Object.keys(emotes.user)[i] ||
                        getStreamerName().toLowerCase() == Object.keys(emotes.user)[i]) {
                        for (let j = 0; j < emotes.user[Object.keys(emotes.user)[i]].length; j++) {
                            toemotes.push([emotes.user[Object.keys(emotes.user)[i]][j], "//extend.dinu.ga/emotes/user/" + Object.keys(emotes.user)[i] + "/" + emotes.user[Object.keys(emotes.user)[i]][j] + ".png"]);
                        }
                    }
                }

                if (options.twitchemotes) {
                    for (let i = 0; i < Object.keys(twitchemotes.emotes).length; i++) {
                        toemotes.push([Object.keys(twitchemotes.emotes)[i], "//static-cdn.jtvnw.net/emoticons/v1/" + twitchemotes.emotes[Object.keys(twitchemotes.emotes)[i]].image_id + "/1.0"]);
                    }
                }

                var tomessage = addEmotes(message, toemotes, site, options);
                if (tomessage != message) {
                    replaceMessage(mut, name, tomessage);
                }
            }
        };
    });
});
