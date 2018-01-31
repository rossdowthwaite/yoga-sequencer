const SequenceModel = require('../models/sequence')
const Sequencer = require('../sequencer/sequencer')()

const repository = (db) => {

  /**
   * Get all sequences
   *
   * @return sequences Array of the returned sequence
   **/
  const getAllSequences = () => {
    return new Promise((resolve, reject) => {
      SequenceModel.find().then( sequences => {
        resolve(sequences);
      }).catch( (err) => {
        reject(new Error('An error occurred:' + err))
      });
    })
  }

  /**
   * Get sequence by slug
   *
   * @param slug String comes from req.params
   * @return sequence Object the returned position
   **/
  const getSequenceBySlug = ({slug}) => {
    return new Promise( (resolve, reject) => {
      const query = {
        slug,
      }
      SequenceModel.findOne(query, (err, sequence) => {
        if (err) {
          reject(new Error('An error occurred:' + err))
        }
        resolve( sequence );
      })
    })
  }

  /**
   * Get positions by level
   *
   * @param level String comes from req.params
   * @return sequence Object the returned position
   **/
  const getSequenceByLevel = ({level}) => {
    return new Promise( (resolve, reject) => {
      const query = {
        level,
      }
      SequenceModel.find(query, (err, sequence) => {
        if (err) {
          reject(new Error('An error occurred:' + err))
        }
        resolve( sequence );
      })
    })
  }

  const createNewSequence = (query) => {
    return new Promise( (resolve, reject) => {
      Sequencer.createSequence(query)
        .then( (sequence) => {
          resolve(sequence);
        })
        .catch((err) => {
          reject(new Error('An error occurred:' + err))
        })
    })
  }

  /*
   *  Discconnect from database
   */
  const disconnect = () => {
    db.close()
  }

  return {
    getAllSequences,
    getSequenceBySlug,
    getSequenceByLevel,
    disconnect,
    createNewSequence,
  }
}

const connect = (connection) => {
  return new Promise((resolve, reject) =>{
    if(!connection) {
      reject(new Error('connection db not supplied'))
    }
    resolve( repository(connection) )
  })
}

module.exports = Object.assign({}, {connect})
