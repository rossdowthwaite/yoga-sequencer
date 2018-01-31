const axios = require('axios')

const Sequencer = () => {

  const getStartPostion = async (level) => {
    return new Promise( (resolve, reject) => {
      const url = `${process.env.YOGA_API}/positions/start/${level}`

      axios.get(url)
        .then( (startPosition) => {
          resolve( startPosition.data )
        })
        .catch(function (error) {
          reject( console.log('Something went wrong!', error));
        });

    })
  }

  const selectNextPosition = (moves) =>{
    return new Promise( (resolve, reject) => {
      const randomInt = Math.floor(Math.random() * moves.length)
      const next = moves[randomInt]
      resolve( next )
    })
  }

  const getNextPositions = ({slug, level}) => {
    return new Promise( (resolve, reject) => {
      const url = `${process.env.YOGA_API}/positions/${slug}/next/${level}`

      axios.get(url)
        .then( (nextMoves) => {
          resolve(nextMoves.data)
        })
        .catch( (error) => {
          reject(console.log(error))
        })
    })
  }

  const getPosition = ({slug}) => {
    return new Promise( (resolve, reject) => {

      const url = `${process.env.YOGA_API}/positions/${slug}`

      axios.get(url)
        .then( (move) => {
          console.log('--- ',move.data.name)
          resolve( move.data )
        })
        .catch( (error) => {
          reject( console.log(error) )
        })
    })
  }

  const buildSequence = (sequence) => {
    return new Promise( (resolve, reject) => {
      getNextPositions(sequence[sequence.length - 1])
        .then( (nextPositions) => {
          return selectNextPosition(nextPositions)
        })
        .then( (nextPosition) => {
          return getPosition(nextPosition)
        })
        .then( (position) => {
          sequence.push(position)
          resolve(sequence)
        })
        .catch( (err) => {
          reject(console.log('Something went wrong!', err))
        })

    })
  }

  const createSequence = async (params) => {
    console.log('creating new sequence with params', params)

    const { no_of_moves = 10, level = 'beginner' } = params;
    let sequence = [];

    // Get start position
    await getStartPostion(level)
      .then( (start) => {
        sequence.push( start )
      })

    while(sequence.length !== no_of_moves*1){
      await buildSequence(sequence)
        .then( (seq) => {
          sequence = seq
        })
    }

    return sequence
  }

  return {
    createSequence,
    getPosition,
  }
}

module.exports = Sequencer
