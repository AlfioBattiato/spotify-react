export const GET_DATA = 'GET_DATA'
export const GET_SONG = 'GET_SONG'
export const GET_LIKE = 'GET_LIKE'



export const getSong=(song)=>{
  return{
    type:GET_SONG,
    payload:song
}
}

export const getlike=(value)=>{
  return{
    type:GET_LIKE,
    payload:value
}
}


export const getFetchAction=(artistName)=>{

    return async(dispatch,getState)=>{



        try {
            let response = await fetch(
              'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
                artistName,
              {
                method: 'GET',
                headers: {
                  'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
                  'X-RapidAPI-Key':
                    '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
                },
              }
            )
            if (response.ok) {
              const { data } = await response.json()
              dispatch({
                type:GET_DATA,
                payload:data
            });
            } else {
              throw new Error('Error in fetching songs')
            }
          } catch (err) {
            console.log('error', err)
          }
        }


    }
