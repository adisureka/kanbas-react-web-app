import { createSlice } from "@reduxjs/toolkit";
//import { modules } from "../../Database";
{/*modified from A5 removve previous line*/}

{/*
const initialState = {
  	modules: modules,
};*/}
const initialState = {modules: []}

const modulesSlice = createSlice({
	name: "modules",
  	initialState,
    
  	reducers: {

      setModules: (state, action) => {
        state.modules = action.payload
      }, /*added from A5, you can not have {} here otherwise an error*/
         
    	addModule: (state, { payload: module }) => {
      		const newModule: any = {
        	_id: new Date().getTime().toString(),
        	lessons: [],
        	name: module.name,
        	course: module.course,
      		};
      	   state.modules = [...state.modules, newModule] as any;
    	},
    
    	deleteModule: (state, { payload: moduleId }) => {
      		state.modules = state.modules.filter(
        	(m: any) => m._id !== moduleId);
    	},
    
    	updateModule: (state, { payload: module }) => {
      		state.modules = state.modules.map((m: any) =>
        	m._id === module._id ? module : m
      		) as any;
    	},
    
    	editModule: (state, { payload: moduleId }) => {
      		state.modules = state.modules.map((m: any) =>
        	m._id === moduleId ? { ...m, editing: true } : m
      		) as any;
    	},
  },
});

export const { addModule, deleteModule, updateModule, editModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;