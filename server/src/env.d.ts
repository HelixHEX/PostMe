declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    GITHUB_SECRET: string;
    TWITTER_CONSUMER_KEY: string;
    TWITTER_CONSUMER_SECRET: string;
    TWITTER_ACCESS_TOKEN_KEY: string;
    TWITTER_ACCESS_TOKEN_SECRET: string;
    TWITTER_BEARER_TOKEN: string;
  }
}