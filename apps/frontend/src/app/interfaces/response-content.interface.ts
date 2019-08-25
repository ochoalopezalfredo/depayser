import { Movie } from './movie.interface';

export interface ResponseContent {
    entry: any,
    response: {
        groups: Array<Movie>,
        total: number
    },
    status: string,
    msg: string
}