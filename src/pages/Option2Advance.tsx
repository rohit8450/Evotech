import { FunctionComponent } from "react";
import NewArrivals from "../components/NewArrivals";
import SalesProgress from "../components/SalesProgress";
import RecentActivity from "../components/RecentActivity";
import Categories from "../components/Categories";
import Sidebar from "../components/Sidebar";
import DashboardLinks from "../components/DashboardLinks";
import Header from "../components/Header";
import Reports from "../components/Reports";
import FilterType from "../components/FilterType";
import GiftsSection from "../components/GiftsSection";
import RecentStats from "../components/RecentStats";
import styles from "./Option2Advance.module.css";

const Option2Advance: FunctionComponent = () => {
  return (
    <div className={styles.option2Advance}>
      <div className={styles.defaultToggle}>
        <div className={styles.widgets}>
          <NewArrivals />
          <SalesProgress />
          <RecentActivity />
          <div className={styles.widget1}>
            <Categories />
            <div className={styles.top}>
              <img className={styles.topChild} alt="" src="/vector-5@2x.png" />
              <img className={styles.topItem} alt="" src="/vector-6@2x.png" />
              <div className={styles.exportButton}>
                <div className={styles.button} />
                <div className={styles.export}>Export</div>
                <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
              </div>
              <div className={styles.categories}>Categories</div>
            </div>
          </div>
        </div>
        <div className={styles.sidebar}>
          <Sidebar />
          <div className={styles.highlightedRectangle} />
          <img className={styles.topPartIcon} alt="" src="/top-part@2x.png" />
          <div className={styles.iconsBright}>
            <img className={styles.layersIcon} alt="" src="/layers@2x.png" />
            <img
              className={styles.layout4Blocks}
              alt=""
              src="/layout-4-blocks@2x.png"
            />
          </div>
          <div className={styles.headings}>
            <div className={styles.custom}>CUSTOM</div>
          </div>
          <div className={styles.subheadings}>
            <div className={styles.users}>Users</div>
            <div className={styles.contacts}>Contacts</div>
            <div className={styles.chat}>Chat</div>
            <div className={styles.pages}>Pages</div>
          </div>
          <div className={styles.subheadingsActive}>
            <div className={styles.dashboard}>Dashboard</div>
            <div className={styles.dashboard1}>DASHBOARD</div>
            <div className={styles.applications}>Applications</div>
          </div>
          <div className={styles.strokes}>
            <div className={styles.strokesChild} />
            <div className={styles.strokesItem} />
            <div className={styles.strokesInner} />
          </div>
          <div className={styles.iconsFaded}>
            <div className={styles.box3}>
              <div className={styles.bound} />
            </div>
            <img
              className={styles.barcodeReadIcon}
              alt=""
              src="/barcode-read@2x.png"
            />
          </div>
          <img className={styles.arrowsIcon} alt="" src="/arrows@2x.png" />
        </div>
        <div className={styles.sunheader}>
          <DashboardLinks />
          <div className={styles.left}>
            <div className={styles.dashboard2}>Dashboard</div>
            <div className={styles.addNewButton}>
              <div className={styles.addNewButtonChild} />
              <div className={styles.addNew}>Add New</div>
            </div>
            <div className={styles.leftChild} />
          </div>
          <div className={styles.right}>
            <div className={styles.today}>
              <div className={styles.today1}>Today</div>
              <div className={styles.todayActive}>
                <div className={styles.todayActiveChild} />
                <div className={styles.today1}>Today</div>
              </div>
            </div>
            <div className={styles.month}>
              <div className={styles.monthActive}>
                <div className={styles.monthActiveChild} />
                <div className={styles.month1}>{`Month `}</div>
              </div>
              <div className={styles.month2}>{`Month `}</div>
            </div>
            <div className={styles.year}>
              <div className={styles.year1}>Year</div>
              <div className={styles.yearActive}>
                <div className={styles.monthActiveChild} />
                <div className={styles.yearActive1}>Year</div>
              </div>
            </div>
            <div className={styles.actionsButtonPassive}>
              <div className={styles.todayActiveChild} />
              <div className={styles.actions}>Actions</div>
            </div>
            <div className={styles.actionsButtonActive}>
              <div className={styles.actionsButtonActiveChild} />
              <div className={styles.actions1}>Actions</div>
              <img className={styles.sort1Icon} alt="" src="/sort1@2x.png" />
            </div>
            <img
              className={styles.filePlusIcon}
              alt=""
              src="/file-plus-icon@2x.png"
            />
          </div>
        </div>
        <Header />
      </div>
      <Reports />
      <FilterType />
      <div className={styles.defaultToggle1}>
        <div className={styles.widgets1}>
          <div className={styles.widget7}>
            <div className={styles.colTitlesBg} />
            <div className={styles.col6}>
              <img className={styles.buttonIcon} alt="" src="/button@2x.png" />
              <div className={styles.buttonBookmark}>
                <div className={styles.background} />
                <img
                  className={styles.bookmark1Icon}
                  alt=""
                  src="/bookmark-1@2x.png"
                />
              </div>
              <div className={styles.button1}>
                <div className={styles.background1} />
                <div className={styles.viewOffer}>View Offer</div>
              </div>
              <div className={styles.button2}>
                <div className={styles.background1} />
                <div className={styles.viewOffer}>View Offer</div>
              </div>
              <div className={styles.button3}>
                <div className={styles.background1} />
                <div className={styles.viewOffer}>View Offer</div>
              </div>
              <div className={styles.button4}>
                <div className={styles.background1} />
                <div className={styles.viewOffer}>View Offer</div>
              </div>
            </div>
            <div className={styles.col5}>
              <div className={styles.item5}>
                <div className={styles.aHero}>A Hero</div>
                <div className={styles.kobeLeonard}>Kobe Leonard</div>
              </div>
              <div className={styles.item4}>
                <div className={styles.avarage}>Avarage</div>
                <img className={styles.starIcon} alt="" src="/star@2x.png" />
                <img className={styles.starIcon1} alt="" src="/star@2x.png" />
                <img className={styles.starIcon2} alt="" src="/star@2x.png" />
                <img
                  className={styles.halfStartIcon}
                  alt=""
                  src="/halfstart@2x.png"
                />
                <img className={styles.starIcon3} alt="" src="/star1@2x.png" />
              </div>
              <div className={styles.item3}>
                <div className={styles.avarage}>Best Rated</div>
                <img className={styles.starIcon} alt="" src="/star@2x.png" />
                <img className={styles.starIcon1} alt="" src="/star@2x.png" />
                <img className={styles.starIcon2} alt="" src="/star@2x.png" />
                <img
                  className={styles.halfStartIcon}
                  alt=""
                  src="/star@2x.png"
                />
                <img className={styles.starIcon3} alt="" src="/star@2x.png" />
              </div>
              <div className={styles.item2}>
                <div className={styles.aboveAvarage}>Above Avarage</div>
                <img className={styles.starIcon9} alt="" src="/star@2x.png" />
                <img className={styles.starIcon10} alt="" src="/star@2x.png" />
                <img className={styles.starIcon11} alt="" src="/star@2x.png" />
                <img className={styles.starIcon12} alt="" src="/star@2x.png" />
                <img
                  className={styles.halfStartIcon1}
                  alt=""
                  src="/halfstart@2x.png"
                />
              </div>
              <div className={styles.item1}>
                <div className={styles.avarage}>Best Rated</div>
                <img className={styles.starIcon} alt="" src="/star@2x.png" />
                <img className={styles.starIcon1} alt="" src="/star@2x.png" />
                <img className={styles.starIcon2} alt="" src="/star@2x.png" />
                <img
                  className={styles.halfStartIcon}
                  alt=""
                  src="/star@2x.png"
                />
                <img className={styles.starIcon3} alt="" src="/star@2x.png" />
              </div>
              <div className={styles.title}>
                <div className={styles.rating}>RATING</div>
              </div>
            </div>
            <div className={styles.col4}>
              <div className={styles.item5}>
                <div className={styles.aHero}>A Hero</div>
                <div className={styles.kobeLeonard}>Kobe Leonard</div>
              </div>
              <div className={styles.item41}>
                <div className={styles.insurance}>Insurance</div>
                <div className={styles.theHill}>{`The Hill `}</div>
              </div>
              <div className={styles.item31}>
                <div className={styles.insurance}>Transportation</div>
                <div className={styles.theHill}>RoadGee</div>
              </div>
              <div className={styles.item21}>
                <div className={styles.insurance}>{`Houses & Hotels`}</div>
                <div className={styles.theHill}>Agoda</div>
              </div>
              <div className={styles.item11}>
                <div className={styles.insurance}>Web, UI/UX Design</div>
                <div className={styles.theHill}>Intertico</div>
              </div>
              <div className={styles.title1}>
                <div className={styles.rating}>COMPANY</div>
              </div>
            </div>
            <div className={styles.col3}>
              <div className={styles.item5}>
                <div className={styles.paid}>Paid</div>
                <div className={styles.kobeLeonard}>$130</div>
              </div>
              <div className={styles.item41}>
                <div className={styles.insurance}>Pending</div>
                <div className={styles.theHill}>$14,000</div>
              </div>
              <div className={styles.item31}>
                <div className={styles.insurance}>Paid</div>
                <div className={styles.theHill}>$6,700</div>
              </div>
              <div className={styles.item21}>
                <div className={styles.insurance}>Rejected</div>
                <div className={styles.theHill}>$1,600</div>
              </div>
              <div className={styles.item11}>
                <div className={styles.insurance}>Paid</div>
                <div className={styles.theHill}>$520</div>
              </div>
              <div className={styles.title1}>
                <div className={styles.rating}>COMISSION</div>
              </div>
            </div>
            <div className={styles.col2}>
              <div className={styles.item5}>
                <div className={styles.paid}>Paid</div>
                <div className={styles.kobeLeonard}>$1,900</div>
              </div>
              <div className={styles.item41}>
                <div className={styles.insurance}>Paid</div>
                <div className={styles.theHill}>$2,600,000</div>
              </div>
              <div className={styles.item31}>
                <div className={styles.insurance}>Paid</div>
                <div className={styles.theHill}>$34,000,000</div>
              </div>
              <div className={styles.item21}>
                <div className={styles.insurance}>Pending</div>
                <div className={styles.theHill}>$23,000,000</div>
              </div>
              <div className={styles.item11}>
                <div className={styles.insurance}>In Proccess</div>
                <div className={styles.theHill}>$8,000,000</div>
              </div>
              <div className={styles.title1}>
                <div className={styles.rating}>EARNINGS</div>
              </div>
            </div>
            <div className={styles.col1}>
              <div className={styles.item54}>
                <div className={styles.htmlAngularjsRuby}>
                  HTML, AngularJS, Ruby
                </div>
                <div className={styles.ktrMobileApplication}>
                  KTR Mobile Application
                </div>
                <div className={styles.img}>
                  <img
                    className={styles.product71Icon}
                    alt=""
                    src="/product7-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.item44}>
                <div className={styles.htmlAngularjsRuby}>
                  Python, PostgreSQL, ReactJS
                </div>
                <div className={styles.ktrMobileApplication}>Natali Trump</div>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
              <div className={styles.item34}>
                <div className={styles.phpLaravelVuejs}>
                  PHP, Laravel, VueJS
                </div>
                <div className={styles.lebronWayde}>Lebron Wayde</div>
                <div className={styles.item3Child} />
                <img className={styles.boy22Icon} alt="" src="/boy22@2x.png" />
              </div>
              <div className={styles.item24}>
                <div className={styles.cAspnetMs}>C#, ASP.NET, MS SQL</div>
                <div className={styles.jessieClarcson}>Jessie Clarcson</div>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar1@2x.png"
                />
              </div>
              <div className={styles.item14}>
                <div className={styles.cAspnetMs}>HTML, JS, ReactJS</div>
                <div className={styles.jessieClarcson}>Brad Simmons</div>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar2@2x.png"
                />
              </div>
              <div className={styles.title4}>
                <div className={styles.products}>PRODUCTS</div>
              </div>
            </div>
            <div className={styles.head}>
              <div className={styles.button5}>
                <div className={styles.background5} />
                <div className={styles.create}>Create</div>
              </div>
              <div className={styles.button6}>
                <div className={styles.background6} />
                <div className={styles.create}>New Report</div>
              </div>
              <div className={styles.newArrivals}>New Arrivals</div>
              <div className={styles.moreThan400}>
                More than 400+ new members
              </div>
            </div>
          </div>
          <div className={styles.widget6}>
            <div className={styles.col51}>
              <div className={styles.row5}>
                <img
                  className={styles.buttonTrashIcon}
                  alt=""
                  src="/button-trash@2x.png"
                />
                <img
                  className={styles.buttonEditIcon}
                  alt=""
                  src="/button-edit@2x.png"
                />
                <img
                  className={styles.buttonSettingsIcon}
                  alt=""
                  src="/button-settings@2x.png"
                />
              </div>
              <div className={styles.row4}>
                <img
                  className={styles.buttonTrashIcon}
                  alt=""
                  src="/button-trash@2x.png"
                />
                <img
                  className={styles.buttonEditIcon}
                  alt=""
                  src="/button-edit@2x.png"
                />
                <img
                  className={styles.buttonSettingsIcon}
                  alt=""
                  src="/button-settings@2x.png"
                />
              </div>
              <div className={styles.row3}>
                <img
                  className={styles.buttonTrashIcon}
                  alt=""
                  src="/button-trash@2x.png"
                />
                <img
                  className={styles.buttonEditIcon}
                  alt=""
                  src="/button-edit@2x.png"
                />
                <img
                  className={styles.buttonSettingsIcon}
                  alt=""
                  src="/button-settings@2x.png"
                />
              </div>
              <div className={styles.row2}>
                <img
                  className={styles.buttonTrashIcon}
                  alt=""
                  src="/button-trash@2x.png"
                />
                <img
                  className={styles.buttonEditIcon}
                  alt=""
                  src="/button-edit@2x.png"
                />
                <img
                  className={styles.buttonSettingsIcon}
                  alt=""
                  src="/button-settings@2x.png"
                />
              </div>
              <div className={styles.row1}>
                <img
                  className={styles.buttonTrashIcon}
                  alt=""
                  src="/button-trash@2x.png"
                />
                <img
                  className={styles.buttonEditIcon}
                  alt=""
                  src="/button-edit@2x.png"
                />
                <img
                  className={styles.buttonSettingsIcon}
                  alt=""
                  src="/button-settings@2x.png"
                />
              </div>
            </div>
            <div className={styles.col41}>
              <div className={styles.button7}>
                <div className={styles.background7} />
                <div className={styles.inProgress}>In Progress</div>
              </div>
              <div className={styles.button8}>
                <div className={styles.background8} />
                <div className={styles.rejected1}>Rejected</div>
              </div>
              <div className={styles.button9}>
                <div className={styles.background9} />
                <div className={styles.success}>Success</div>
              </div>
              <div className={styles.button10}>
                <div className={styles.background10} />
                <div className={styles.inProgress}>In Progress</div>
              </div>
              <div className={styles.button11}>
                <div className={styles.background11} />
                <div className={styles.approved}>Approved</div>
              </div>
            </div>
            <div className={styles.col31}>
              <div className={styles.reactjsRuby}>{`ReactJS, Ruby `}</div>
              <div className={styles.angularjsC}>AngularJS, C#</div>
              <div className={styles.laravelMetronic}>Laravel, Metronic</div>
              <div className={styles.pythonMysql}>Python, MySQL</div>
              <div className={styles.reactjsHtml}>ReactJs, HTML</div>
            </div>
            <div className={styles.col21}>
              <div className={styles.item55}>
                <div className={styles.paid6}>Paid</div>
                <div className={styles.kobeLeonard}>$45,200,000</div>
              </div>
              <div className={styles.item45}>
                <div className={styles.paid6}>Paid</div>
                <div className={styles.kobeLeonard}>$57,000</div>
              </div>
              <div className={styles.item35}>
                <div className={styles.paid6}>Paid</div>
                <div className={styles.kobeLeonard}>$560,000</div>
              </div>
              <div className={styles.item25}>
                <div className={styles.paid6}>Paid</div>
                <div className={styles.kobeLeonard}>$4,600,000</div>
              </div>
              <div className={styles.item15}>
                <div className={styles.paid6}>Paid</div>
                <div className={styles.kobeLeonard}>$2,000,000</div>
              </div>
            </div>
            <div className={styles.col11}>
              <div className={styles.item56}>
                <div className={styles.ftpBprowbnccc}>
                  <span className={styles.ftp}>FTP:</span>
                  <span className={styles.bprowbnccc}> bprow@bnc.cc</span>
                </div>
                <div className={styles.ktrMobileApplication1}>
                  KTR Mobile Application
                </div>
                <div className={styles.item3Child} />
                <img
                  className={styles.kickstarterIcon}
                  alt=""
                  src="/187kickstarter@2x.png"
                />
              </div>
              <div className={styles.item46}>
                <div className={styles.ftpBprowbnccc}>
                  <span className={styles.ftp}>FTP:</span>
                  <span className={styles.bprowbnccc}> bprow@bnc.cc</span>
                </div>
                <div className={styles.hrManagement}>HR Management</div>
                <div className={styles.item3Child} />
                <img
                  className={styles.kickstarterIcon}
                  alt=""
                  src="/182bebo@2x.png"
                />
              </div>
              <div className={styles.item36}>
                <div className={styles.ftpBprowbnccc}>
                  <span className={styles.ftp}>FTP:</span>
                  <span className={styles.bprowbnccc}> bprow@bnc.cc</span>
                </div>
                <div className={styles.ciscoManagement}>Cisco Management</div>
                <div className={styles.item3Child} />
                <img
                  className={styles.kickstarterIcon}
                  alt=""
                  src="/194puzzle@2x.png"
                />
              </div>
              <div className={styles.item26}>
                <div className={styles.ftpBprowbnccc}>
                  <span className={styles.ftp}>FTP:</span>
                  <span className={styles.bprowbnccc}> bprow@bnc.cc</span>
                </div>
                <div className={styles.hrManagement}>Telegram Application</div>
                <div className={styles.item3Child} />
                <img
                  className={styles.telegramIcon}
                  alt=""
                  src="/186telegram@2x.png"
                />
              </div>
              <div className={styles.item16}>
                <div className={styles.ftpBprowbnccc}>
                  <span className={styles.ftp}>FTP:</span>
                  <span className={styles.bprowbnccc}> bprow@bnc.cc</span>
                </div>
                <div className={styles.santOutstanding}>Sant Outstanding</div>
                <div className={styles.item3Child} />
                <img
                  className={styles.telegramIcon}
                  alt=""
                  src="/184plurk@2x.png"
                />
              </div>
            </div>
            <div className={styles.head1}>
              <div className={styles.tabs}>
                <div className={styles.background12} />
                <div className={styles.day}>Day</div>
                <div className={styles.week}>Week</div>
                <div className={styles.month3}>Month</div>
              </div>
              <div className={styles.newArrivals}>New Arrivals</div>
              <div className={styles.moreThan4001}>
                More than 400+ new members
              </div>
            </div>
          </div>
          <div className={styles.widget5}>
            <div className={styles.item57}>
              <div className={styles.phpSqliteArtisan}>
                PHP, SQLite, Artisan CLIмм
              </div>
              <div className={styles.brivibaSaas}>Briviba SaaS</div>
              <img className={styles.icon} alt="" src="/icon@2x.png" />
            </div>
            <div className={styles.item47}>
              <div className={styles.phpSqliteArtisan}>
                PHP, SQLite, Artisan CLIмм
              </div>
              <div className={styles.brivibaSaas}>Briviba SaaS</div>
              <img className={styles.icon} alt="" src="/icon1@2x.png" />
            </div>
            <div className={styles.item37}>
              <div className={styles.phpSqliteArtisan}>
                PHP, SQLite, Artisan CLIмм
              </div>
              <div className={styles.brivibaSaas}>Briviba SaaS</div>
              <img className={styles.icon} alt="" src="/icon2@2x.png" />
            </div>
            <div className={styles.item27}>
              <div className={styles.phpSqliteArtisan}>
                PHP, SQLite, Artisan CLIмм
              </div>
              <div className={styles.brivibaSaas}>Briviba SaaS</div>
              <img className={styles.icon} alt="" src="/icon3@2x.png" />
            </div>
            <div className={styles.item17}>
              <div className={styles.phpSqliteArtisan}>
                PHP, SQLite, Artisan CLIмм
              </div>
              <div className={styles.brivibaSaas}>Briviba SaaS</div>
              <img className={styles.icon} alt="" src="/icon4@2x.png" />
            </div>
            <div className={styles.head2}>
              <div className={styles.dots}>
                <div className={styles.dotsChild} />
                <div className={styles.dotsItem} />
              </div>
              <div className={styles.salesProgress}>Sales Progress</div>
            </div>
          </div>
          <div className={styles.widget4}>
            <img
              className={styles.widget4Child}
              alt=""
              src="/vector-9@2x.png"
            />
            <div className={styles.salesChange}>Sales Change</div>
            <div className={styles.div15}>+259</div>
            <img className={styles.icon5} alt="" src="/icon5@2x.png" />
          </div>
          <div className={styles.widget3}>
            <img
              className={styles.widget3Child}
              alt=""
              src="/vector-8@2x.png"
            />
            <div className={styles.salesChange}>Weekly Income</div>
            <div className={styles.div15}>750$</div>
            <img className={styles.icon5} alt="" src="/icon6@2x.png" />
          </div>
          <div className={styles.widget2}>
            <div className={styles.item6}>
              <div className={styles.outlinesKeepYou}>
                Outlines keep you honest. Indulging in poorly driving and keep
                structure keep you honest and great person
              </div>
              <div className={styles.item6Child} />
              <div className={styles.item6Item} />
              <div className={styles.div17}>23:07</div>
            </div>
            <div className={styles.item58}>
              <div className={styles.newOrderPlacedContainer}>
                <span>{`New order placed  `}</span>
                <span className={styles.xf2356}> #XF-2356</span>
              </div>
              <div className={styles.item5Item} />
              <div className={styles.item5Inner} />
              <div className={styles.div18}>21:03</div>
            </div>
            <div className={styles.item48}>
              <div className={styles.outlinesKeepYou1}>
                Outlines keep you honest. Indulging in poorly driving and keep
                structure keep you honest great
              </div>
              <div className={styles.item4Item} />
              <div className={styles.item4Inner} />
              <div className={styles.div17}>16:50</div>
            </div>
            <div className={styles.item38}>
              <div className={styles.makeDepositUsdContainer}>
                <span>{`Make deposit `}</span>
                <span className={styles.xf2356}>USD 700</span>
                <span> to ESL</span>
              </div>
              <div className={styles.item3Inner} />
              <div className={styles.ellipseDiv} />
              <div className={styles.div20}>14:37</div>
            </div>
            <div className={styles.item28}>
              <img className={styles.userIcon} alt="" src="/user@2x.png" />
              <img className={styles.userIcon1} alt="" src="/user1@2x.png" />
              <img className={styles.userIcon2} alt="" src="/user2@2x.png" />
              <div className={styles.aeolMeetingWith}>AEOL meeting with</div>
              <div className={styles.item2Item} />
              <div className={styles.item2Inner} />
              <div className={styles.div21}>10:00</div>
            </div>
            <div className={styles.item18}>
              <div className={styles.outlinesKeepYou1}>
                Outlines keep you honest. Indulging in poorly driving and keep
                structure
              </div>
              <div className={styles.item1Item} />
              <div className={styles.item1Inner} />
              <div className={styles.div17}>08:42</div>
            </div>
            <div className={styles.head3}>
              <div className={styles.sales}>890,344 Sales</div>
              <div className={styles.recentActivities}>Recent Activities</div>
              <div className={styles.dots1}>
                <div className={styles.dotsChild} />
                <div className={styles.dotsItem} />
              </div>
            </div>
          </div>
          <div className={styles.widget11}>
            <div className={styles.background13} />
            <div className={styles.top}>
              <img className={styles.topChild} alt="" src="/vector-51@2x.png" />
              <img className={styles.topItem} alt="" src="/vector-61@2x.png" />
              <div className={styles.exportButton}>
                <div className={styles.button} />
                <div className={styles.export}>Export</div>
                <img className={styles.arrowIcon} alt="" src="/arrow@2x.png" />
              </div>
              <div className={styles.categories}>Categories</div>
            </div>
            <div className={styles.carts}>
              <div className={styles.cart4}>
                <div className={styles.background14} />
                <div className={styles.bugReports}>Bug Reports</div>
                <img
                  className={styles.stockholmIconsCommunicatio}
                  alt=""
                  src="/stockholm-icons--communication--urgent-mail1@2x.png"
                />
              </div>
              <div className={styles.cart3}>
                <div className={styles.background15} />
                <div className={styles.itemOrders}>Item Orders</div>
                <img
                  className={styles.compilingIcon}
                  alt=""
                  src="/compiling2@2x.png"
                />
              </div>
              <div className={styles.cart2}>
                <div className={styles.background16} />
                <div className={styles.newUsers}>New Users</div>
                <img
                  className={styles.addUserIcon}
                  alt=""
                  src="/adduser1@2x.png"
                />
              </div>
              <div className={styles.cart1}>
                <div className={styles.background17} />
                <div className={styles.equalizer}>
                  <div className={styles.bound} />
                  <div className={styles.rectangle62Copy} />
                  <div className={styles.rectangle62Copy2} />
                  <div className={styles.rectangle62Copy4} />
                  <div className={styles.rectangle62Copy3} />
                </div>
                <div className={styles.newUsers}>Weekly Sales</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.quickToolsIcon}
          alt=""
          src="/quick-tools@2x.png"
        />
        <div className={styles.sidebar1}>
          <div className={styles.backgroundRectangle} />
          <div className={styles.highlightedRectangle1} />
          <div className={styles.topPart}>
            <div className={styles.highlightedRectangle2} />
            <img
              className={styles.arrowDoubleLeft}
              alt=""
              src="/arrow-double-left@2x.png"
            />
            <div className={styles.metronic}>METRONIC</div>
          </div>
          <div className={styles.iconsBright}>
            <img className={styles.layersIcon} alt="" src="/layers@2x.png" />
            <img
              className={styles.layout4Blocks}
              alt=""
              src="/layout-4-blocks@2x.png"
            />
          </div>
          <div className={styles.headings1}>
            <div className={styles.custom1}>CUSTOM</div>
            <div className={styles.layout}>LAYOUT</div>
            <div className={styles.components}>COMPONENTS</div>
          </div>
          <div className={styles.subheadings1}>
            <div className={styles.users1}>Users</div>
            <div className={styles.contacts1}>Contacts</div>
            <div className={styles.chat1}>Chat</div>
            <div className={styles.pages1}>Pages</div>
            <div className={styles.subheaders}>Subheaders</div>
            <div className={styles.general}>General</div>
            <div className={styles.builder}>Builder</div>
            <div className={styles.base}>Base</div>
            <div className={styles.custom2}>Custom</div>
            <div className={styles.extended}>Extended</div>
            <div className={styles.icons}>Icons</div>
            <div className={styles.portlets}>Portlets</div>
          </div>
          <div className={styles.subheadingsActive1}>
            <div className={styles.dashboard3}>Dashboard</div>
            <div className={styles.applications1}>Applications</div>
          </div>
          <div className={styles.strokes}>
            <div className={styles.strokesChild} />
            <div className={styles.strokesItem} />
            <div className={styles.strokesInner} />
          </div>
          <img
            className={styles.iconsFaded1}
            alt=""
            src="/icons-faded@2x.png"
          />
          <img className={styles.arrowsIcon1} alt="" src="/arrows1@2x.png" />
        </div>
        <div className={styles.sunheader1}>
          <div className={styles.background18} />
          <div className={styles.left1}>
            <div className={styles.dashboard4}>Dashboard</div>
            <div className={styles.xrs45670}>#XRS-45670</div>
            <div className={styles.addNewButton1}>
              <div className={styles.addNewButtonChild} />
              <div className={styles.addNew}>Add New</div>
            </div>
            <div className={styles.leftItem} />
          </div>
          <div className={styles.right}>
            <div className={styles.today}>
              <div className={styles.today1}>Today</div>
              <div className={styles.todayActive2}>
                <div className={styles.todayActiveChild} />
                <div className={styles.today1}>Today</div>
              </div>
            </div>
            <div className={styles.month}>
              <div className={styles.monthActive}>
                <div className={styles.monthActiveChild} />
                <div className={styles.month1}>{`Month `}</div>
              </div>
              <div className={styles.month2}>{`Month `}</div>
            </div>
            <div className={styles.year}>
              <div className={styles.year1}>Year</div>
              <div className={styles.yearActive}>
                <div className={styles.monthActiveChild} />
                <div className={styles.yearActive1}>Year</div>
              </div>
            </div>
            <div className={styles.actionsButtonPassive}>
              <div className={styles.todayActiveChild} />
              <div className={styles.actions}>Actions</div>
            </div>
            <div className={styles.actionsButtonActive}>
              <div className={styles.actionsButtonActiveChild} />
              <div className={styles.actions1}>Actions</div>
              <img className={styles.sort1Icon} alt="" src="/sort1@2x.png" />
            </div>
            <img
              className={styles.filePlusIcon}
              alt=""
              src="/file-plus-icon@2x.png"
            />
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.sep} />
          <div className={styles.right2}>
            <div className={styles.icons1}>
              <img className={styles.searchIcon} alt="" src="/search1@2x.png" />
              <img
                className={styles.compilingIcon1}
                alt=""
                src="/compiling3@2x.png"
              />
              <div className={styles.equalizer1}>
                <div className={styles.bound} />
                <div className={styles.rectangle62Copy1} />
                <div className={styles.rectangle62Copy21} />
                <div className={styles.rectangle62Copy41} />
                <div className={styles.rectangle62Copy31} />
              </div>
              <img
                className={styles.stockholmIconsShoppingC}
                alt=""
                src="/stockholm-icons--shopping--cart31@2x.png"
              />
              <img
                className={styles.layout4BlocksIcon}
                alt=""
                src="/layout4blocks2@2x.png"
              />
              <img className={styles.flagIcon} alt="" src="/flag@2x.png" />
            </div>
            <div className={styles.hiSean}>
              <span>Hi,</span>
              <span className={styles.sean}> Sean</span>
            </div>
            <div className={styles.initialIcon}>
              <div className={styles.rectangle} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.left2}>
            <div className={styles.pages2}>
              <div className={styles.todayActiveChild} />
              <div className={styles.pages3}>Pages</div>
            </div>
            <div className={styles.features}>
              <div className={styles.featuresActive}>
                <div className={styles.active} />
                <div className={styles.featuresActive1}>Features</div>
              </div>
              <div className={styles.features1}>Features</div>
            </div>
            <div className={styles.apps}>
              <div className={styles.appsActive}>
                <div className={styles.active} />
                <div className={styles.apps1}>Apps</div>
              </div>
              <div className={styles.features1}>Apps</div>
            </div>
          </div>
        </div>
        <img className={styles.toggleIcon} alt="" src="/toggle@2x.png" />
        <img className={styles.toggleIcon1} alt="" src="/toggle1@2x.png" />
      </div>
      <GiftsSection />
      <RecentStats />
    </div>
  );
};

export default Option2Advance;
