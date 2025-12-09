declare module '@apiverve/chucknorris' {
  export interface chucknorrisOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface chucknorrisResponse {
    status: string;
    error: string | null;
    data: ChuckNorrisJokesData;
    code?: number;
  }


  interface ChuckNorrisJokesData {
      joke: string;
  }

  export default class chucknorrisWrapper {
    constructor(options: chucknorrisOptions);

    execute(callback: (error: any, data: chucknorrisResponse | null) => void): Promise<chucknorrisResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: chucknorrisResponse | null) => void): Promise<chucknorrisResponse>;
    execute(query?: Record<string, any>): Promise<chucknorrisResponse>;
  }
}
