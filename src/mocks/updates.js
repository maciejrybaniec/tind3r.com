const person = require('./person');

const updates = () => ({
  matches: [{
    _id: '582f3d054b19f1e97981172a588144b714b76ffd120e284c',
    closed: false,
    common_friend_count: 0,
    common_like_count: 0,
    created_date: '2017-03-14T18:46:32.953Z',
    dead: false,
    last_activity_date: '2017-03-14T18:46:32.953Z',
    message_count: 0,
    messages: [],
    participants: ['588144b714b76ffd120e284c'],
    pending: false,
    is_super_like: false,
    is_boost_match: false,
    following: true,
    following_moments: true,
    id: '582f3d054b19f1e97981172a588144b714b76ffd120e284c',
    person: person(),
  }, {
    _id: '582f3d054b19f1e97981172a58c7a4f5545accbf0f8474ae',
    closed: false,
    common_friend_count: 0,
    common_like_count: 0,
    created_date: '2017-03-15T09:08:52.899Z',
    dead: false,
    last_activity_date: '2017-03-15T09:08:52.899Z',
    message_count: 0,
    messages: [],
    participants: ['58c7a4f5545accbf0f8474ae'],
    pending: false,
    is_super_like: false,
    is_boost_match: false,
    following: true,
    following_moments: true,
    id: '582f3d054b19f1e97981172a58c7a4f5545accbf0f8474ae',
    person: person(),
  }, {
    _id: '582f3d054b19f1e97981172a58af618f946dcd674f1c08e9',
    messages: [{
      _id: '58c85277d9eef3e80b3e9437',
      match_id: '582f3d054b19f1e97981172a58af618f946dcd674f1c08e9',
      to: '582f3d054b19f1e97981172a',
      from: '58af618f946dcd674f1c08e9',
      message: 'To może powiesz coś o jednych i drugich :-P',
      sent_date: '2017-03-14T20:28:39.101Z',
      created_date: '2017-03-14T20:28:39.101Z',
      timestamp: 1489523319101,
    }, {
      _id: '58c914428f9828dc0b3b78e3',
      match_id: '582f3d054b19f1e97981172a58af618f946dcd674f1c08e9',
      to: '58af618f946dcd674f1c08e9',
      from: '582f3d054b19f1e97981172a',
      message: 'To będę tam koczował od 19 :D',
      sent_date: '2017-03-15T10:15:30.241Z',
      created_date: '2017-03-15T10:15:30.241Z',
      timestamp: 1489572930241,
    }, {
      _id: '58c9162328a4ad060cbe176d',
      match_id: '582f3d054b19f1e97981172a58af618f946dcd674f1c08e9',
      to: '582f3d054b19f1e97981172a',
      from: '58af618f946dcd674f1c08e9',
      message: 'No to sobie trochę poczekasz :-D',
      sent_date: '2017-03-15T10:23:31.636Z',
      created_date: '2017-03-15T10:23:31.636Z',
      timestamp: 1489573411636,
    }],
    last_activity_date: '2017-03-15T10:23:31.636Z',
    is_new_message: true,
  }],
  blocks: [],
  lists: [],
  deleted_lists: [],
  liked_messages: [],
  squads: [],
  goingout: [],
  last_activity_date: '2017-03-15T14:32:16.908Z',
});

module.exports = updates;
