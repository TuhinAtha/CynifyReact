import makeQuery from '../../utils/query-maker';  
import axios from 'axios';
export default class BaseAction{
    static setFilters(filters) {
      let module = this.MODULE // this.MODULE comes from derived class
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
      return {type: `${module.trim().toUpperCase()}S_SET_FILTERS`, payload: cFilters};
    }

    static loadList(params) {
      let module = this.MODULE // this.MODULE comes from derived class
      return (dispatch,getState) => {
          dispatch({type: `${module.trim().toUpperCase()}S_GET_FETCHING`, payload: true});
          let url='/api/dummy'
          //let url= `/api/${module}`

          if(params){
                url = makeQuery(url,params);
          }
          axios.get(url).then((response)=> {
            dispatch({type: `${module.trim().toUpperCase()}S_GET_SUCCESS`, payload: response.data});
          }).catch(error => {
            dispatch({type: `${module.trim().toUpperCase()}S_GET_ERROR`, error});
          });
      };
    }
    
    static setSort(sort, skipReload) {
      let module = this.MODULE // this.MODULE comes from derived class
      if(skipReload){
        return {type:  `${module.trim().toUpperCase()}S_SET_SORT`, payload: sort};
      }
      return (dispatch, getState) => {
        dispatch({type:  `${module.trim().toUpperCase()}S_SET_SORT`, payload: sort});
        dispatch(this.loadList.bind(this))
      }      
    }

    static setQuery(q, skipReload) {
      let module = this.MODULE // this.MODULE comes from derived class
      if(skipReload){
        return {type: `${module.trim().toUpperCase()}S_SET_QUERY`, payload: q};
      }
      return (dispatch, getState) => {
          dispatch({type: `${module.trim().toUpperCase()}S_SET_QUERY`, payload: q});
          dispatch(this.loadList.bind(this))
      }
    }

    static setPage(page, skipReload) {
      let module = this.MODULE // this.MODULE comes from derived class
      if(skipReload){
        return {type: `${module.trim().toUpperCase()}S_SET_PAGE`, payload: page};
      }
      return (dispatch, getState) => {
          dispatch({type: `${module.trim().toUpperCase()}S_SET_PAGE`, payload: page});
          dispatch(this.loadList.bind(this))
      }
    }
    
    static load(id) {
      let module = this.MODULE // this.MODULE comes from derived class
      let url='/api/dummy'+id;
      //let url=`/api/${module}/${id}` 
      return (dispatch) => {
        axios.get(url).then((response)=> {
          dispatch({type: `${module.trim().toUpperCase()}_GET_SUCCESS`, payload: response.data});
        }).catch(error => {
          dispatch({type: `${module.trim().toUpperCase()}_GET_ERROR`, error});
        });
         
      };
    }
}