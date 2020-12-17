export const changeName = (items) => {
    return [...new Set(items.map(item => {
                                            if (!!item.ticker && item.currency == "USD") {
                                                return item.ticker;
                                            }
                                        }
                                )
                        )
            ]
}