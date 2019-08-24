import { Movie } from './movie.interface';

export interface ResponseContent {
    response: {
        groups: Array<Movie>,
        total: number
    },
    status: string,
    msg: string
}