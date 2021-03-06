export type WidgetTypes = 'user';
export type WidgetThemes = 'theme-1';

export interface ClientOpts
{
    interval?: number;
    postOnStart?: boolean;
}

export interface ReqApiData
{
    token: string;
    bot:
        {
            botId: string;
            guildsCount: number;
        };
}

export interface ReqResponse
{
    status: number;
    message?: string;
    guildsCount?: number;
}
