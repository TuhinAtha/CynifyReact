import ACTION_TYPES from './actionTypes';  
import makeQuery from '../../utils/query-maker';  
import axios from 'axios';
export default class BaseAction{
    static loadlist(module, params) {
        return (dispatch,getState) => {
            dispatch({type: `${module.trim().toUpperCase}S_GET_FETCHING`, payload: true});
            let url='/api/dummy'; //`/api/${module}`
            if(params){
                  url = makeQuery(url,params);
            }
            axios.get(url).then((response)=> {
              dispatch({type: `${module.trim().toUpperCase}S_GET_SUCCESS`, payload: response.data});
            }).catch(error => {
              dispatch({type: `${module.trim().toUpperCase}S_GET_ERROR`, error});
            });
        };
    }
    static setFilters(filters) {
      let cFilters = {};
      for(let i in filters){
        let obj = {};
        if(filters[i].type){
          obj.t = filters[i].type
        }
        if(filters[i].diff){
          obj.d = filters[i].diff
        }

        cFilters[filters[i].name] = {...obj};
      }
      return {type: `${module.trim().toUpperCase}S_SET_FILTERS`, payload: cFilters};
    }
    static setSort(sort) {
      return {type:  `${module.trim().toUpperCase}S_SET_SORT`, payload: sort};
    }
    static setmodule(module) {
      return {type:  `${module.trim().toUpperCase}S_SET_module`, payload: module};
    }
    static setQuery(q) {
      return {type: `${module.trim().toUpperCase}S_SET_QUERY`, payload: q};
    }
    static load(module, id) {
      let url='/api/dummy'+id; //`/api/${module}/${id}` 
      return (dispatch) => {
        axios.get(url).then((response)=> {
          dispatch({type: `${module.trim().toUpperCase}_GET_SUCCESS`, payload: response.data});
        }).catch(error => {
          dispatch({type: `${module.trim().toUpperCase}_GET_ERROR`, error});
        });
         
      };
    }
}