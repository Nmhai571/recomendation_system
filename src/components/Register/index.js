import React from 'react';
import './index.css';
import LogoNetTruyen from './Đăng ký - NetTruyen_files/logo-nettruyen.png';
const Register = () => {
    return (
        <>
            <>
                <header className="header" id="header" style={{ background: '#403667' }}>
                    <div className="navbar">
                        <div className="container">
                            <div className="navbar-header">
                                <div className="navbar-brand">
                                    <a className="logo" title="Truyện tranh online" href="/">
                                        <img alt="Logo NetTruyen" src={LogoNetTruyen} />
                                    </a>
                                </div>
                                <div className="navbar-form navbar-left hidden-xs search-box comicsearchbox">
                                    <div className="input-group">
                                        <input type="text" className="searchinput form-control" placeholder="Tìm truyện..." autoComplete="off" />
                                        <div className="input-group-btn">
                                            <input type="submit" defaultValue className="searchbutton btn btn-default" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav-account list-inline hidden-xs pull-right">
                                <li className="login-link"><a rel="nofollow" href="/login">Đăng nhập</a></li>
                                <li className="register-link"><a rel="nofollow" href="/register">Đăng ký</a></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <nav className="main-nav hidden-xs" id="mainNav" style={{ zIndex: 1000 }}>
                    <div className="inner">
                        <div className="container">
                            <div className="Module Module-144">
                                <div className="ModuleContent">
                                    <ul className="nav navbar-nav main-menu">
                                        <li className="active">
                                            <a target="_self" href="/">
                                                Trang chủ
                                            </a>
                                        </li>

                                        <li>
                                            <a target="_self" href="http://www.nettruyenme.com/theo-doi">Theo dõi</a>
                                        </li>
                                        <li className>
                                            <a target="_self" href="http://www.nettruyenme.com/lich-su">Lịch sử</a>
                                        </li>
                                        <li className="dropdown">
                                            <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" target="_self" href="http://www.nettruyenme.com/tim-truyen">Thể
                                                loại <i className="fa fa-caret-down" /></a>
                                            <ul className="dropdown-menu megamenu">
                                                <li>
                                                    <div className="clearfix">
                                                        <div className="col-sm-3">
                                                            <ul className="nav">
                                                                <li>
                                                                    <a data-title="Tất cả thể loại truyện tranh" href="http://www.nettruyenme.com/tim-truyen" target="_self">
                                                                        <strong>Tất
                                                                            cả</strong>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a title="Action" data-title="Thể loại này thường có nội dung về đánh nhau, bạo lực, hỗn loạn, với diễn biến nhanh" href="http://www.nettruyenme.com/tim-truyen/action-95" target="_self">Action</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Adult" data-title="Thể loại Adult đề cập đến vấn đề nhạy cảm, chỉ dành cho tuổi 17+" href="http://www.nettruyenme.com/tim-truyen/truong-thanh" target="_self">Adult</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Adventure" data-title="Thể loại phiêu lưu, mạo hiểm, thường là hành trình của các nhân vật" href="http://www.nettruyenme.com/tim-truyen/adventure" target="_self">Adventure</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Anime" data-title="Truyện đã được chuyển thể thành film Anime" href="http://www.nettruyenme.com/tim-truyen/anime" target="_self">Anime</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Chuyển Sinh" data-title="Thể loại này là những câu chuyện về người ở một thế giới này xuyên đến một thế giới khác, có thể là thế giới mang phong cách trung cổ với kiếm sĩ và ma thuật, hay thế giới trong game, hoặc có thể là bạn chết ở nơi này và được chuyển sinh đến nơi khác" href="http://www.nettruyenme.com/tim-truyen/chuyen-sinh-2130" target="_self">Chuyển
                                                                        Sinh</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Comedy" data-title="Thể loại có nội dung trong sáng và cảm động, thường có các tình tiết gây cười, các xung đột nhẹ nhàng" href="http://www.nettruyenme.com/tim-truyen/comedy-99" target="_self">Comedy</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Comic" data-title="Truyện tranh Châu Âu và Châu Mĩ" href="http://www.nettruyenme.com/tim-truyen/comic" target="_self">Comic</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Cooking" data-title="Thể loại có nội dung về nấu ăn, ẩm thực" href="http://www.nettruyenme.com/tim-truyen/cooking" target="_self">Cooking</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Cổ Đại" data-title="Truyện có nội dung xảy ra ở thời cổ đại phong kiến." href="http://www.nettruyenme.com/tim-truyen/co-dai-207" target="_self">
                                                                        <strong>Cổ
                                                                            Đại</strong>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a title="Doujinshi" data-title="Thể loại truyện phóng tác do fan hay có thể cả những Mangaka khác với tác giả truyện gốc. Tác giả vẽ Doujinshi thường dựa trên những nhân vật gốc để viết ra những câu chuyện theo sở thích của mình" href="http://www.nettruyenme.com/tim-truyen/doujinshi" target="_self">Doujinshi</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Drama" data-title="Thể loại mang đến cho người xem những cảm xúc khác nhau: buồn bã, căng thẳng thậm chí là bi phẫn" href="http://www.nettruyenme.com/tim-truyen/drama-103" target="_self">Drama</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Đam Mỹ" data-title="Truyện tình cảm giữa nam và nam." href="http://www.nettruyenme.com/tim-truyen/dam-my" target="_self">
                                                                        <strong>Đam
                                                                            Mỹ</strong>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <ul className="nav">
                                                                <li>
                                                                    <a title="Ecchi" data-title="Thường có những tình huống nhạy cảm nhằm lôi cuốn người xem" href="http://www.nettruyenme.com/tim-truyen/ecchi" target="_self">Ecchi</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Fantasy" data-title="Thể loại xuất phát từ trí tưởng tượng phong phú, từ pháp thuật đến thế giới trong mơ thậm chí là những câu chuyện thần tiên" href="http://www.nettruyenme.com/tim-truyen/fantasy-105" target="_self">Fantasy</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Gender Bender" data-title="Là một thể loại trong đó giới tính của nhân vật bị lẫn lộn: nam hoá thành nữ, nữ hóa thành nam..." href="http://www.nettruyenme.com/tim-truyen/gender-bender" target="_self">Gender
                                                                        Bender</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Harem" data-title="Thể loại truyện tình cảm, lãng mạn mà trong đó, nhiều nhân vật nữ thích một nam nhân vật chính" href="http://www.nettruyenme.com/tim-truyen/harem-107" target="_self">Harem</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Historical" data-title="Thể loại có liên quan đến thời xa xưa" href="http://www.nettruyenme.com/tim-truyen/historical" target="_self">Historical</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Horror" data-title="Horror là: rùng rợn, nghe cái tên là bạn đã hiểu thể loại này có nội dung thế nào. Nó làm cho bạn kinh hãi, khiếp sợ, ghê tởm, run rẩy, có thể gây sock - một thể loại không dành cho người yếu tim" href="http://www.nettruyenme.com/tim-truyen/horror" target="_self">Horror</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Josei" data-title="Thể loại của manga hay anime được sáng tác chủ yếu bởi phụ nữ cho những độc giả nữ từ 18 đến 30. Josei manga có thể miêu tả những lãng mạn thực tế , nhưng trái ngược với hầu hết các kiểu lãng mạn lí tưởng của Shoujo manga với cốt truyện rõ ràng, chín chắn" href="http://www.nettruyenme.com/tim-truyen/josei" target="_self">Josei</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Live action" data-title="Truyện đã được chuyển thể thành phim" href="http://www.nettruyenme.com/tim-truyen/live-action" target="_self">Live
                                                                        action</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Manga" data-title="Truyện tranh của Nhật Bản" href="http://www.nettruyenme.com/tim-truyen/manga-112" target="_self">Manga</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Manhua" data-title="Truyện tranh của Trung Quốc" href="http://www.nettruyenme.com/tim-truyen/manhua" target="_self">
                                                                        <strong>Manhua</strong>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a title="Manhwa" data-title="Truyện tranh Hàn Quốc, đọc từ trái sang phải" href="http://www.nettruyenme.com/tim-truyen/manhwa-11400" target="_self">Manhwa</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Martial Arts" data-title="Giống với tên gọi, bất cứ gì liên quan đến võ thuật trong truyện từ các trận đánh nhau, tự vệ đến các môn võ thuật như akido, karate, judo hay taekwondo, kendo, các cách né tránh" href="http://www.nettruyenme.com/tim-truyen/martial-arts" target="_self">Martial
                                                                        Arts</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Mature" data-title="Thể loại dành cho lứa tuổi 17+ bao gồm các pha bạo lực, máu me, chém giết, tình dục ở mức độ vừa" href="http://www.nettruyenme.com/tim-truyen/mature" target="_self">Mature</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <ul className="nav">
                                                                <li>
                                                                    <a title="Mecha" data-title="Mecha, còn được biết đến dưới cái tên meka hay mechs, là thể loại nói tới những cỗ máy biết đi (thường là do phi công cầm lái)" href="http://www.nettruyenme.com/tim-truyen/mecha-117" target="_self">Mecha</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Mystery" data-title="Thể loại thường xuất hiện những điều bí ấn không thể lí giải được và sau đó là những nỗ lực của nhân vật chính nhằm tìm ra câu trả lời thỏa đáng" href="http://www.nettruyenme.com/tim-truyen/mystery" target="_self">Mystery</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Ngôn Tình" data-title="Truyện thuộc kiểu lãng mạn, kể về những sự kiện vui buồn trong tình yêu của nhân vật chính." href="http://www.nettruyenme.com/tim-truyen/ngon-tinh" target="_self">
                                                                        <strong>Ngôn
                                                                            Tình</strong>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a title="One shot" data-title="Những truyện ngắn, thường là 1 chapter" href="http://www.nettruyenme.com/tim-truyen/one-shot" target="_self">One
                                                                        shot</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Psychological" data-title="Thể loại liên quan đến những vấn đề về tâm lý của nhân vật ( tâm thần bất ổn, điên cuồng ...)" href="http://www.nettruyenme.com/tim-truyen/psychological" target="_self">Psychological</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Romance" data-title="Thường là những câu chuyện về tình yêu, tình cảm lãng mạn. Ớ đây chúng ta sẽ lấy ví dụ như tình yêu giữa một người con trai và con gái, bên cạnh đó đặc điểm thể loại này là kích thích trí tưởng tượng của bạn về tình yêu" href="http://www.nettruyenme.com/tim-truyen/romance-121" target="_self">
                                                                        <strong>Romance</strong>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a title="School Life" data-title="Trong thể loại này, ngữ cảnh diễn biến câu chuyện chủ yếu ở trường học" href="http://www.nettruyenme.com/tim-truyen/school-life" target="_self">School
                                                                        Life</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Sci-fi" data-title="Bao gồm những chuyện khoa học viễn tưởng, đa phần chúng xoay quanh nhiều hiện tượng mà liên quan tới khoa học, công nghệ, tuy vậy thường thì những câu chuyện đó không gắn bó chặt chẽ với các thành tựu khoa học hiện thời, mà là do con người tưởng tượng ra" href="http://www.nettruyenme.com/tim-truyen/sci-fi" target="_self">Sci-fi</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Seinen" data-title="Thể loại của manga thường nhằm vào những đối tượng nam 18 đến 30 tuổi, nhưng người xem có thể lớn tuổi hơn, với một vài bộ truyện nhắm đến các doanh nhân nam quá 40. Thể loại này có nhiều phong cách riêng biệt , nhưng thể loại này có những nét riêng biệt, thường được phân vào những phong cách nghệ thuật rộng hơn và phong phú hơn về chủ đề, có các loại từ mới mẻ tiên tiến đến khiêu dâm" href="http://www.nettruyenme.com/tim-truyen/seinen" target="_self">Seinen</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Shoujo" data-title="Đối tượng hướng tới của thể loại này là phái nữ. Nội dung của những bộ manga này thường liên quan đến tình cảm lãng mạn, chú trọng đầu tư cho nhân vật (tính cách,...)" href="http://www.nettruyenme.com/tim-truyen/shoujo" target="_self">Shoujo</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Shoujo Ai" data-title="Thể loại quan hệ hoặc liên quan tới đồng tính nữ, thể hiện trong các mối quan hệ trên mức bình thường giữa các nhân vật nữ trong các manga, anime" href="http://www.nettruyenme.com/tim-truyen/shoujo-ai-126" target="_self">Shoujo
                                                                        Ai</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Shounen" data-title="Đối tượng hướng tới của thể loại này là phái nam. Nội dung của những bộ manga này thường liên quan đến đánh nhau và/hoặc bạo lực (ở mức bình thường, không thái quá)" href="http://www.nettruyenme.com/tim-truyen/shounen-127" target="_self">Shounen</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Shounen Ai" data-title="Thể loại có nội dung về tình yêu giữa những chàng trai trẻ, mang tính chất lãng mạn nhưng ko đề cập đến quan hệ tình dục" href="http://www.nettruyenme.com/tim-truyen/shounen-ai" target="_self">Shounen
                                                                        Ai</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <ul className="nav">
                                                                <li>
                                                                    <a title="Slice of Life" data-title="Nói về cuộc sống đời thường" href="http://www.nettruyenme.com/tim-truyen/slice-of-life" target="_self">Slice
                                                                        of
                                                                        Life</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Smut" data-title="Những truyện có nội dung hơi nhạy cảm, đặc biệt là liên quan đến tình dục" href="http://www.nettruyenme.com/tim-truyen/smut" target="_self">Smut</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Soft Yaoi" data-title="Boy x Boy. Nặng hơn Shounen Ai tí." href="http://www.nettruyenme.com/tim-truyen/soft-yaoi" target="_self">Soft
                                                                        Yaoi</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Soft Yuri" data-title="Girl x Girl. Nặng hơn Shoujo Ai tí" href="http://www.nettruyenme.com/tim-truyen/soft-yuri" target="_self">Soft
                                                                        Yuri</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Sports" data-title="Đúng như tên gọi, những môn thể thao như bóng đá, bóng chày, bóng chuyền, đua xe, cầu lông,... là một phần của thể loại này" href="http://www.nettruyenme.com/tim-truyen/sports" target="_self">Sports</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Supernatural" data-title="Thể hiện những sức mạnh đáng kinh ngạc và không thể giải thích được, chúng thường đi kèm với những sự kiện trái ngược hoặc thách thức với những định luật vật lý" href="http://www.nettruyenme.com/tim-truyen/supernatural" target="_self">Supernatural</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Thiếu Nhi" data-title="Truyện tranh dành cho lứa tuổi thiếu nhi" href="http://www.nettruyenme.com/tim-truyen/thieu-nhi" target="_self">Thiếu
                                                                        Nhi</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Tragedy" data-title="Thể loại chứa đựng những sự kiện mà dẫn đến kết cục là những mất mát hay sự rủi ro to lớn" href="http://www.nettruyenme.com/tim-truyen/tragedy-136" target="_self">Tragedy</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Trinh Thám" data-title="Các truyện có nội dung về các vụ án, các thám tử cảnh sát điều tra..." href="http://www.nettruyenme.com/tim-truyen/trinh-tham" target="_self">Trinh
                                                                        Thám</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Truyện scan" data-title="Các truyện đã phát hành tại VN được scan đăng online" href="http://www.nettruyenme.com/tim-truyen/truyen-scan" target="_self">Truyện
                                                                        scan</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Truyện Màu" data-title="Tổng hợp truyện tranh màu, rõ, đẹp" href="http://www.nettruyenme.com/tim-truyen/truyen-mau" target="_self">Truyện
                                                                        Màu</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Webtoon" data-title="Là truyện tranh được đăng dài kỳ trên internet của Hàn Quốc chứ không xuất bản theo cách thông thường" href="http://www.nettruyenme.com/tim-truyen/webtoon" target="_self">Webtoon</a>
                                                                </li>
                                                                <li>
                                                                    <a title="Xuyên Không" data-title="Xuyên Không, Xuyên Việt là thể loại nhân vật chính vì một lý do nào đó mà bị đưa đến sinh sống ở một không gian hay một khoảng thời gian khác. Nhân vật chính có thể trực tiếp xuyên qua bằng thân xác mình hoặc sống lại bằng thân xác người khác." href="http://www.nettruyenme.com/tim-truyen/xuyen-khong-205" target="_self">
                                                                        <strong>Xuyên
                                                                            Không</strong>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-sm-12 hidden-xs">
                                                            <p className="tip">
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className>
                                            <a target="_self" href="http://www.nettruyenme.com/tim-truyen-nang-cao">Tìm
                                                truyện</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div />
                <main className="main">
                    <div className="container">
                        <div id="ctl00_Breadcrumbs_pnlWrapper">
                            <ul className="breadcrumb" itemScope itemType="http://schema.org/BreadcrumbList">
                                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"><a href="/" className="itemcrumb active" itemProp="item" itemType="http://schema.org/Thing"><span itemProp="name">Trang chủ</span></a>
                                    <meta itemProp="position" content={2} />
                                </li>
                                <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"><a href="/register" className="selectedcrumb">Đăng ký</a>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <div id="ctl00_divCenter" className="full-width col-sm-12">
                                <div className="row">
                                    <div className="col-sm-offset-3 col-sm-6">
                                        <div className="user-page clearfix">
                                            <h1 className="postname">
                                                Đăng ký tài khoản
                                            </h1>
                                            <div id="ctl00_mainContent_login1_LoginCtrl_pnlLContainer" className="signup-wrapper" onkeypress="javascript:return WebForm_FireDefaultButton(event, 'ctl00_mainContent_login1_LoginCtrl_Login')">
                                                <div className="form-group">
                                                    <label htmlFor="ctl00_mainContent_login1_LoginCtrl_UserName" className="control-label">Họ và tên</label>
                                                    <input name="fullname" type="text" maxLength={100} id="ctl00_mainContent_login1_LoginCtrl_UserName" tabIndex={10} className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="ctl00_mainContent_login1_LoginCtrl_UserName" className="control-label">Email</label>
                                                    <input name="email" type="text" maxLength={100} id="ctl00_mainContent_login1_LoginCtrl_UserName" tabIndex={10} className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="ctl00_mainContent_login1_LoginCtrl_UserName" className="control-label">Giới tính</label>
                                                    <input name="gender" type="text" maxLength={100} id="ctl00_mainContent_login1_LoginCtrl_UserName" tabIndex={10} className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label">Mật khẩu</label>
                                                    <input name="password" type="password" id="ctl00_mainContent_login1_LoginCtrl_Password" tabIndex={10} className="form-control" placeholder="Mật khẩu" />
                                                </div>
                                            </div>
                                            <div className="login-action">
                                                <div className="form-group">
                                                    <input type="submit" name="register" defaultValue="Đăng Ký" id="ctl00_mainContent_login1_LoginCtrl_Login" tabIndex={10} className="btn btn-primary" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>




        </>
    )
}

export default Register;