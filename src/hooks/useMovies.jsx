import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
    query{
        discover{
            movies{
                popular{
                    edges{
                        node{
                            title 
                            genres{
                                name
                            } 
                            poster(size: W500)    
                            tagline
                            overview
                            id
                        }
                    }
                }
            }
        } 
    }
`;

export const UseMovies = ()=> {

    const {error, loading, data} = useQuery(GET_CHARACTERS);

    return{
        error,
        loading,
        data
    }
}
