import api from './api';

export default {
    all(){
        return api().get('/songs/all');
    },
    create(d){
      return api().post('/songs/create', d);
   },
    detail(d){
      return api().post('/songs/detail', d);
   },
   update(d){
     return api().put('/songs/edit', d);
   },
   filter(d){
    return api().get(`/songs?search=${d}`);
  }
}