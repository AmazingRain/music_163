import React, { lazy } from 'react';
import { Redirect } from "react-router-dom";

const Discover = lazy(() => import('@/pages/discover'));
const Friend = lazy(() => import('@/pages/friend'));
const Mine = lazy(() => import('@/pages/mine'));
const Recommend = lazy(() => import('../pages/discover/c-pages/recommend'));
const Ranking = lazy(() => import('../pages/discover/c-pages/ranking'));
const Songs = lazy(() => import('../pages/discover/c-pages/songs'));
const Djradio = lazy(() => import('../pages/discover/c-pages/djradio'));
const Artist = lazy(() => import('../pages/discover/c-pages/djradio'));
const Album = lazy(() => import('../pages/discover/c-pages/artist'));
const SongDetail = lazy(() => import('../pages/song-detail'));
const NotFound = lazy(() => import('../pages/not-found'));


export default [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to={"/discover/recommend"}/>
        )
      },
      {
        path: "/discover/recommend",
        exact: true,
        component: Recommend
      },
      {
        path: "/discover/ranking",
        component: Ranking
      },
      {
        path: "/discover/songs",
        component: Songs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: Djradio
      },
      {
        path: "/discover/artist",
        component: Artist
      },
      {
        path: "/discover/album",
        component: Album
      },
      {
        path: "/discover/song",
        component: SongDetail
      },
      {
        component: NotFound
      }
    ]
  },
  {
    path: "/friend",
    component: Friend
  },
  {
    path: "/mine",
    component: Mine
  },
  {
    component: NotFound
  }
]

