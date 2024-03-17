import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Views/Pages/Home/Home';
import Dashboard from './/Views/Pages/Dashboard/Dashboard';
import EmailForm from './Views/Components/Forms/EmailForm/EmailForm';
import CodeForm from './Views/Components/Forms/CodeForm/CodeForm';
import PasswordForm from './Views/Components/Forms/PasswordForm/PasswordForm';
import ProjectList from './Views/Components/ProjectList/ProjectList';
import Project from './Views/Components/Project/Project';
import TutorialList from './Views/Components/TutorialList/TutorialList';
import Tutorial from './Views/Components/Tutorial/Tutorial';
import DocumentationList from './Views/Components/DocumentationList/DocumentationList';
import Documentation from './Views/Components/Documentation/Documentation';
import TutorialCategory from './Views/Components/TutorialCategory/TutorialCategory';
import ArticleList from './Views/Components/ArticleList/ArticleList';
import Article from './Views/Components/Article/Article';
import LogOut from './Views/Components/LogOut/LogOut';
import VisitorStatistic from './Views/Components/VisitorStatistic/VisitorStatistic';
import UserList from './Views/Components/UserList/UserList';
import ContactList from './Views/Components/ContactList/ContactList';
import Profil from './Views/Components/Profil/Profil';
import Error404 from './Views/Components/Error404/Error404';
import { ACTIONS, DOCUMENTATIONS } from './utils/Constants';
import RequireAuth from './RequireAuth/RequireAuth';

export const Routing = () => (
    <Routes>
        <Route path="/" element={<Home />}>
            <Route path="home" />
            <Route path="recovery" element={<EmailForm action={ACTIONS.RECOVERY} />} />
            <Route path="password/:code/:id" element={<PasswordForm action={ACTIONS.RECOVERY} />} />
            <Route path="code/:code/:type/:id" element={<CodeForm />} />
            <Route path="projects" element={<ProjectList />} >
                <Route path=":id" element={<Project />} />
            </Route>
            <Route path="articles" element={<ArticleList />} >
                <Route path=":id" element={<Article />} />
            </Route>
            <Route path="tutorials" element={<TutorialList />} >
                <Route path=":category" element={<TutorialCategory />}>
                    <Route path=":id" element={<Tutorial />}>
                    </Route>
                </Route>
            </Route>
            <Route path="documentation" element={<DocumentationList />} >
                <Route path="mention" element={<Documentation type={DOCUMENTATIONS.LEGAL_NOTICE} />} />
                <Route path="guide" element={<Documentation type={DOCUMENTATIONS.USER_GUIDE} />} />
            </Route>
        </Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route path="logout" element={<LogOut />} />
            <Route path="visitors-stat" element={<VisitorStatistic />} />
            <Route path="projects" element={<ProjectList />} >
                <Route path=":id" element={<Project />} />
            </Route>
            <Route path="articles" element={<ArticleList />} >
                <Route path=":id" element={<Article />} />
            </Route>
            <Route path="tutorials" element={<TutorialList />} >
                <Route path=":category" element={<TutorialCategory />}>
                    <Route path=":id" element={<Tutorial />}>
                    </Route>
                </Route>
            </Route>
            <Route path="documentation" element={<DocumentationList />} >
                <Route path="mention" element={<Documentation type={DOCUMENTATIONS.LEGAL_NOTICE} />} />
                <Route path="guide" element={<Documentation type={DOCUMENTATIONS.USER_GUIDE} />} />
            </Route>
            <Route path="users" element={<UserList />} />
            <Route path="contacts" element={<ContactList />} />
            <Route path="profile" element={<Profil />} />
        </Route>
        <Route path="*" element={<Error404 />} />
    </Routes>
);

export default Routing;
