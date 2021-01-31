import React, { memo } from 'react';

import { RecommendWraper, RecommendLeft, RecommendRight, Content } from './style';

import Banner from './c-cpn/banner';
import HotRecommendWrapper from './c-cpn/hot-recommend';
import NewAlbum from './c-cpn/new-album';
import RankingList from './c-cpn/ranking-list';
import UserLogin from './c-cpn/user-login';

function Recommend(props) {

  return (
    <RecommendWraper>
      <Banner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommendWrapper/>
          <NewAlbum/>
          <RankingList/>
        </RecommendLeft>
        <RecommendRight>
          <UserLogin/>
        </RecommendRight>
      </Content>
    </RecommendWraper>
  )
}


export default memo(Recommend);




// function Recommend(props) {
//   const { getBanners, banners } = props;
//   console.log(banners);
//   useEffect(() => {
//     getBanners();
//   }, [getBanners])
  
//   return (
//     <h2>Recommend：{banners.length}</h2>
//   )
// }

// const mapStateToProps = state => ({
//   banners: state.recommend.banners
// });

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));