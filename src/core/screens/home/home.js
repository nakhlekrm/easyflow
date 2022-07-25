import { Link } from "react-router-dom";
import CoreCheckBox from "../../components/coreCheckBox";
import CoreDiv from "../../components/coreDiv";
import Marquee from "react-fast-marquee";
const home = () => {
  return (
    <CoreDiv isContainer pvxl phxl  >
      {/* <CoreDiv pl isRow style={{ justifyContent: "space-between" }}   >
        <img src="https://proxify.io/_nuxt/img/9fc8ff3.svg" />


      </CoreDiv> */}


      <CoreDiv isRow >
        <CoreDiv >
          <CoreDiv>
            <h1>Hire senior and vetted
              remote developers
              within days, not months</h1>
            Stop wasting time and money on bad hires and focus on building great products.
            We match you with the top 2% of developers in days, not months.
            From 31.90€/hour.
            )
            <CoreDiv pl isRow >
              <CoreCheckBox prim size={15} title={"Get started within a week"} />
              <CoreCheckBox prim size={15} title={"View pre-vetted developerse"} />
              <CoreCheckBox prim size={15} title={"Only pay if you’re happy"} />

            </CoreDiv>
          </CoreDiv>
        </CoreDiv>
        <CoreDiv isRow >
          <div style={{ display: 'flex', flexDirection: "column", alignContent: 'center', justifyContent: 'center', verticalAlign: 'middle' }} bgPrim >
            <img src="https://proxify.io/_nuxt/img/01fcd20.webp" />
          </div>
          <div style={{ display: 'flex', flexDirection: "column", alignContent: 'center', justifyContent: 'center', verticalAlign: 'middle' }}>
            <img src="https://proxify.io/_nuxt/img/835d23a.webp" style={{ margin: 5 }} />
            <img src="https://proxify.io/_nuxt/img/dfc50ab.webp" style={{ margin: 5 }} />
          </div>
          <div >
            <img src="https://proxify.io/_nuxt/img/81e2c02.webp" style={{ margin: 5 }} />
            <img src="https://proxify.io/_nuxt/img/603f799.webp" style={{ margin: 5 }} />
            <img src="https://proxify.io/_nuxt/img/a368c3a.webp" style={{ margin: 5 }} />
          </div>
          <div>
            <img src="https://proxify.io/_nuxt/img/e599a19.webp" style={{ margin: 5 }} />
            <img src="https://proxify.io/_nuxt/img/a873239.webp" style={{ margin: 5 }} />
          </div>
        </CoreDiv>
      </CoreDiv>

      <CoreDiv style={{ margin: 50, Height: 200, marginLeft: 200 }}>
        <button type="button" class="btn btn-primary" style={{ justifyContent: 'center', width: 250, height: 50 }}>Find a developper
        </button>
      </CoreDiv>

      <Marquee style={{ backgroundColor: 'black', marginTop: 75, height: 150 }}>
        <div style={{ minWidth: 150 }}><img src="https://proxify.io/_nuxt/img/027cfc7.svg" style={{ margin: 15 }} /></div>

        <img src="https://proxify.io/_nuxt/img/ce7645c.svg" />
        <img src="https://proxify.io/_nuxt/img/1e26610.svg" />
        <img src="https://proxify.io/_nuxt/img/716b35b.svg" />
        <img src="https://proxify.io/_nuxt/img/0e9c596.svg" />

      </Marquee>
    </CoreDiv >
  )

}
export default home;