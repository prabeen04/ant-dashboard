import React, { Component, lazy, Suspense, useState, useEffect } from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';
import DashboardHeader from './dashboardHeader';
import LoginWithGoogle from '../../components/google/googleLogin';
const JumpStartBox = lazy(() => import('./jumpStart'))
const Charts = lazy(() => import('./../charts/charts'))
const Settings = lazy(() => import('../settings/settings'))

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [isPopover, setIsPopover] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      setIsFetching(false)
    }, 500);
  }, [])
  function fetchChartData() {
    setIsFetching(true)
    setTimeout(() => {
      setIsFetching(false)
    }, 300)
  }
  const antIcon = <Icon type="loading" style={{ fontSize: 60, color: 'tomato' }} spin />;
  const blurClass = classNames({
    'blur-wrapper': isFetching
  });
  return (
    <div className={blurClass}>
      <DashboardHeader fetchChartData={fetchChartData} />
      <div className='flex-container'>
        <Suspense fallback={<div>Loading ...</div>}>
          <JumpStartBox />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading Charts ...</div>}>
        <Charts />
      </Suspense>
      <Suspense fallback={<div>Loading Settings ...</div>}>
        <Settings />
      </Suspense>
      <LoginWithGoogle buttonText='Login with Google' />
    </div>
  )
}

export default Dashboard;