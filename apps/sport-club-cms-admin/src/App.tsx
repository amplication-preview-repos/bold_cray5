import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StaticPageList } from "./staticPage/StaticPageList";
import { StaticPageCreate } from "./staticPage/StaticPageCreate";
import { StaticPageEdit } from "./staticPage/StaticPageEdit";
import { StaticPageShow } from "./staticPage/StaticPageShow";
import { BlogArticleList } from "./blogArticle/BlogArticleList";
import { BlogArticleCreate } from "./blogArticle/BlogArticleCreate";
import { BlogArticleEdit } from "./blogArticle/BlogArticleEdit";
import { BlogArticleShow } from "./blogArticle/BlogArticleShow";
import { PracticeInfoList } from "./practiceInfo/PracticeInfoList";
import { PracticeInfoCreate } from "./practiceInfo/PracticeInfoCreate";
import { PracticeInfoEdit } from "./practiceInfo/PracticeInfoEdit";
import { PracticeInfoShow } from "./practiceInfo/PracticeInfoShow";
import { SeoList } from "./seo/SeoList";
import { SeoCreate } from "./seo/SeoCreate";
import { SeoEdit } from "./seo/SeoEdit";
import { SeoShow } from "./seo/SeoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"SportClubCMS"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="StaticPage"
          list={StaticPageList}
          edit={StaticPageEdit}
          create={StaticPageCreate}
          show={StaticPageShow}
        />
        <Resource
          name="BlogArticle"
          list={BlogArticleList}
          edit={BlogArticleEdit}
          create={BlogArticleCreate}
          show={BlogArticleShow}
        />
        <Resource
          name="PracticeInfo"
          list={PracticeInfoList}
          edit={PracticeInfoEdit}
          create={PracticeInfoCreate}
          show={PracticeInfoShow}
        />
        <Resource
          name="Seo"
          list={SeoList}
          edit={SeoEdit}
          create={SeoCreate}
          show={SeoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
