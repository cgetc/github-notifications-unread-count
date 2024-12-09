function main() {
    if (document.querySelector('section[aria-labelledby="single-sign-on"]')) {
        document.title = `❗${document.title}`
        return
    }

    const unreadCount = document.querySelectorAll('.notification-unread').length
    if (unreadCount) {
        const text = unreadCount >= 25 ? '25+' : new String(unreadCount)
        document.title = `(${text}) ${document.title}`
    }

    setInterval(reload, 60000)
}

function reload() {
    if (document.hidden) {
        location.reload()
    }
}

main()
