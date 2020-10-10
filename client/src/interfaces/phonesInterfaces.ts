export interface phoneCardInterface {
    "_id": string,
    routePosition: string,
    title: string,
    availabelColor: string[],
    availabelDevices: {
            availableRAM: string[],
            images: {
                main: string,
                other: string[]
            },
            color: string
       }[],
    price: {
        current: string,
        old: string
    },
    deviceInfo: {
        [key: string]: string
    },
    about: {
        title: string,
        description: string
    }[]
}

export type phoneState = {
    phoneList: phoneCardInterface[] | [],
    error: any | null,
    loading: boolean | null,
    phoneListState: phoneListStateType,
    currentModel: phoneCardInterface | null
};

export type phoneListStateType = {
    pages: number,
    currentPage: number,
    onPage: number,
    visible: phoneCardInterface[] | [],
    sorted: phoneCardInterface[] | [],
    currentSortedValue: string
}

export type hotPriceState = {
    error: any | null,
    loading: boolean | null,
    hotPricePhoneList: phoneCardInterface[] | [],
}

// phoneList = visileList
// visibleList.sort() -> sorted
// sorted.filter() => visible