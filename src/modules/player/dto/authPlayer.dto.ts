export interface requestLoginPlayer{
    email: string,
    password: string
}

export interface returnAuthPlayer{
    token?: string,
    result: boolean
}