(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3070c992"],{"212d":function(e,t,a){},2487:function(e,t,a){"use strict";a("4120")},4120:function(e,t,a){},5014:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("TopComponent",{attrs:{isLogged:!0}}),a("WorkspaceFormModal"),a("b-container",{staticClass:"component-bg"},[a("b-row",{attrs:{"align-v":"center"}},[a("b-col",{attrs:{cols:"10"}},[a("h1",[e._v("Seus Workspaces")])]),a("b-col",{attrs:{cols:"2"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.newWorkspaceModal",modifiers:{newWorkspaceModal:!0}}]},[a("b-icon",{attrs:{icon:"plus"}}),e._v("Novo Workspace")],1)],1)],1),a("hr"),a("b-row",{attrs:{cols:"1","cols-md":"3"}},e._l(e.workspaces,(function(e){return a("b-col",{key:e.id,staticStyle:{"max-width":"33%"}},[a("Card",{attrs:{workspace:e}})],1)})),1)],1)],1)},s=[],r=a("98f9"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{staticClass:"mb-5 mr-4 shadow-sm"},[a("a",{attrs:{href:"/#/workspace/"+e.workspace.id}},[a("b-card-text",[a("b-row",[a("b-col",{staticClass:"text-center",attrs:{cols:"4"}},[e.workspace.icon?a("b-img",{attrs:{width:"75",height:"75",src:"http://localhost:5000/api/file/"+e.workspace.icon,rounded:"circle",alt:"Circle image","blank-color":"#777"}}):a("b-img",{staticClass:"m1",attrs:{src:"https://wtctravelservices.com/public/uploads/service-6.jpg",alt:"Study image",width:"70",height:"70",rounded:"circle"}})],1),a("b-col",{attrs:{cols:"8"}},[a("h4",{staticClass:"mb-0"},[e._v(e._s(e.workspace.name))]),a("div",{staticClass:"ellipsis",attrs:{title:e.workspace.description}},[a("p",[e._v(e._s(e.workspace.description))])])])],1)],1)],1)])},n=[],i={props:{workspace:Object}},l=i,p=(a("2487"),a("2877")),d=Object(p["a"])(l,c,n,!1,null,"bcba090e",null),u=d.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{ref:"workspaceModal",attrs:{id:"newWorkspaceModal",title:"Novo Workspace",size:"lg","hide-footer":"","header-class":"text-dark","header-close-content":"<h2>&times;</h2>",scrollable:""}},[a("b-form",{on:{submit:e.onSubmit}},[a("b-form-row",[a("b-col",{staticClass:"text-center",attrs:{cols:"4"}},[a("b-form-group",{attrs:{id:"imageLabel",label:"","label-for":"iconInput"}},[a("b-link",{staticClass:"notify-badge shadow",on:{click:e.selectImage}},[a("b-icon",{attrs:{icon:"pencil-square"}})],1),null===e.tempURL?a("img",{attrs:{src:e.defaultIcon,width:"150",height:"150"}}):e._e(),null!==e.tempURL?a("b-img",{attrs:{id:"iconInput",src:e.tempURL,width:"150",height:"150",rounded:"circle",alt:"Workspace Icon"}}):e._e(),a("b-form-file",{staticClass:"invisible",attrs:{id:"fileInput",value:e.file,plain:"",accept:"image/*"},on:{change:e.changeImage}})],1)],1),a("b-col",{attrs:{cols:"8"}},[a("b-form-group",{attrs:{id:"nameLabel",label:"Nome:","label-for":"nameInput"}},[a("b-form-input",{attrs:{id:"nameInput",type:"text",placeholder:"Digite o nome",required:""},model:{value:e.workspace.name,callback:function(t){e.$set(e.workspace,"name",t)},expression:"workspace.name"}})],1),a("b-form-group",{attrs:{id:"descLabel",label:"Descrição:","label-for":"descInput"}},[a("b-form-textarea",{attrs:{id:"descInput",type:"text",placeholder:"Digite a descrição",rows:"3","max-rows":"6",required:""},model:{value:e.workspace.description,callback:function(t){e.$set(e.workspace,"description",t)},expression:"workspace.description"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Salvar")])],1)],1)],1)],1)},b=[],f=a("1da1"),w=(a("96cf"),a("b0c0"),a("a4d3"),a("e01a"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("6a71")),h={data:function(){return{workspace:{name:"",description:"",icon:null,tasks:[],pomodoros:[],columns:[],lastAccess:null,owner:""},defaultIcon:a("2e70"),file:null,tempURL:null}},methods:{onSubmit:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function a(){var o,s,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.preventDefault(),o=t.$store.state.useremail,a.next=4,w["a"].get("user/".concat(o)).then((function(e){t.workspace.owner=e.data._id}));case 4:return s=new FormData,r=t.workspace.icon,s.append("file",r),s.append("name",t.workspace.name),s.append("description",t.workspace.description),s.append("owner",t.workspace.owner),a.next=12,w["a"].post("workspace",s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(){t.$store.dispatch("loadWorkspaces"),t.hideModal()}));case 12:case"end":return a.stop()}}),a)})))()},selectImage:function(){document.getElementById("fileInput").click()},changeImage:function(e){this.tempURL=URL.createObjectURL(e.target.files[0]),this.workspace.icon=e.target.files[0]},hideModal:function(){this.$refs.workspaceModal.hide()}}},k=h,g=(a("ef0f"),Object(p["a"])(k,m,b,!1,null,"475b681c",null)),v=g.exports,x=a("2f62"),_={components:{TopComponent:r["a"],Card:u,WorkspaceFormModal:v},mounted:function(){this.$store.dispatch("loadWorkspaces")},computed:Object(x["c"])(["workspaces"])},I=_,C=(a("5bea"),Object(p["a"])(I,o,s,!1,null,"0753f069",null));t["default"]=C.exports},"5bea":function(e,t,a){"use strict";a("d5b0")},d5b0:function(e,t,a){},ef0f:function(e,t,a){"use strict";a("212d")}}]);
//# sourceMappingURL=chunk-3070c992.cfba2582.js.map