import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';


import App from './App.vue';

// route components
import Team from './components/team/Team.vue';
import UserList from './components/user/UserList.vue';
import UserAdd from './components/user/UserAdd.vue';
import UserUpdate from './components/user/UserUpdate.vue';
import TeamMember from './components/team/TeamMember.vue';



// 1
// first we have to create conf of router just we do for createApp in vue 
const router = createRouter({
    // the history key is use to create perticular hostory mode from history and  hash modes and creageWebHistory finction will create history mode insted of hash mode  
    history: createWebHistory(),
    // routes is a array of objects hear which will conatin all routes we want to use in our app
    routes: [

        // 11
        {path: '/', redirect: '/team'},
        // you can use redirect key and name of path to redirect user if he comes to this route

        // 3 hear each object will be one route for our app so we can create router by creating object
        {path: '/team', component: Team },
        // hear path key represent path where we want to load our component and component key will represent which component we want to load on that path 

        // 7
        // now many times we also want to pass some dynamic route params in our path like id, name, slug etc so that we can get all those dynamic properties in our component and we can use them in our compnent way we want.
        // in vue-router we can define those dynamic routers by :route-param-name this will create dynamic route for us we can define as many dynamic routes we want in single path
        {path: '/team-member/:id', component: TeamMember},  
        // you just have to keep in mind that all routes define in routes array parse line by line so if we have same route like above without dynamic param it will be catch by above so you have to make routes and define order of them base on that
        // ex after above route if we define team-member/add this route so this will also catch by above so you have to define all static routes like this before and then dynamic routes  

        // 10
        {path: '/team-member/:id', component: TeamMember, props: true},
        // most off we use route for views page but it also happen that we us have some senario where we use it for component so we can render whole conponent as route and that component we can also use for child in any other component but hear beacuse of dynamic route our component will be depandend on route param which will be not avalable when we use tempMember component as child or component of other page or view so for that we can use prop: true key so all dynamic components will be avalable to you as prop just like we recive it in other components 
        // with this if we use this component in view we will get prop from params and in we use it in other component then we can pass thos props as props for this component 
        // keep in mind alwase use prop true when you providing route to component so in future if you need to use those component in any other component as it's child you can reuse this component just we use other component. this way you can use this component in route and other components as well.    

        // 13
        // in our application it can be also a senario where we want to create nested routes like when we go to some route we have other routes as well in our app which are childs of those routes and then whenever we visit nested route we will alwase see parent of that child loded and ce can switch between childs of those parent
        // like in innovent manage vehicle sub tabs
        // to achive nesting we can use children key which contains [] same kile we define in router and we can add as many childs as we want hear and all path of children will be prefix by there parent path    
        {path:'/user', component: UserList, children: [
            {path: 'add', component: UserAdd},
            {path: 'update/:id', component: UserUpdate}
        ]},
        // now we define childs of the route now every time we visit parent or any child we will have parent alwase loded in our screen but there is one thing remain the router-view we define is only responsible to load top level routes so when we visit add or update screen vue don't know that where to render this childs so because this childs are part of userList component obvausly it should load in userList component so we have to define router-view there as well to tell vue to load all childs of this component hear and by rule all child routes parent should contain router-view to load them on screen like hear in UserList contain router-view to load it's childs and App.vue contain router-view to load all routes because App.vue is parent for all other components and routes.
        // you should only use children when you want to load parent every time child loads and realy want to load any component inside other component.  



        // 12
        // many times it also happen that we want to redirect user of load 404 page if user go to some routes which is not supported by our app so we can achive this by this regex and this will load 404 page or redirect us if we visit any path which not supported by our app
        // keep in mind that this route should we alwase in last line of ypur router otherwise it will catch all registered routes as well so keep it as last entry of your routes array
        // in vue 2 path for not catched routes was ** but hear it's like this ** won't work in vue 3    
        {path: '/:notFound(.*)', redirect: "/team"}


    ]
}) 


const app = createApp(App)

app.use(router) 
// 2 after defining router conf we have to register it as external plugin for our app and use method is use to provide and register such third party plugins for our app. and hear we are providing router conf which we create with createRouter function and store in router const. just kepp in mind before use it in our app app instance shoud be create first to we can use it in our app and before mount
// most off all use() should be after creatingApp instance and before mounting it to any element.    

app.mount('#app');
