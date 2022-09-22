import React, { useEffect, useRef, useState } from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import Plan from './Plan/Plan'
import "./plans.scss";
import countries from './country-states.json'

export default function Plans() {
    const [planSwitcher, setPlanSwitcher] = useState(0)
    const [country, setCountry] = useState("");
    const [checkeout, setCheckeout] = useState(false);
    const [plan_price, setPlan_price] = useState(0)
    const infoRef = useRef({});
    const paypal = useRef();
    const secret_key = "EKRWMEztEG_laWclDa9JjfAVf78krg7qZqn40AqZW5I1v5gjvzISApZiYGGyLwW5bG_ozA5A5uSv5h6e";
    const onSelect = (id)=>{
        if(id===0){
            setPlan_price(0);
            setCheckeout(false);
        }
        if(id === 1){
            setPlan_price(9.99);
        }
        if(id === 3){
            setPlan_price(19.99);
        }
        if(id === 6){
            setPlan_price(34.99);
        }
        if(id === 12){
            setPlan_price(52.99);
        }
        setPlanSwitcher(id)
    }
    console.log(plan_price);
    // countries handler
    const countrySelect = [];
    for(const [key,item] of Object.entries(countries.country)){
        countrySelect.push({key,item})
    }
    //form checker if all data is entered
    const submitFormHandler = ()=>{
        const data = {};
        for(const [key,value] of Object.entries(infoRef.current)){
            if(value){
                data[key] = value;
            }
        }
        data["country"] = country;
        if(Object.entries.length===8){
            setCheckeout(true)
        }
        setCheckeout(true)

    }
    //purshase handler
    const purchaseHandler = ()=>{
        const data = {};
        for(const [key,value] of Object.entries(infoRef.current)){
            data[key] = value;
        }
        data["country"] = country
        console.log(data);
        //dispatch user data to save it on the database
    }

    useEffect(() => {
      window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: plan_price+" USD Plan",
                  amount: {
                    currency_code: "USD",
                    value: plan_price,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(paypal.current);
    }, [checkeout, plan_price]);
    console.log(checkeout);
  return (
    <div className='plans' id='plans'>
        <div className="bg-diagonal top"></div>
        <div className="bg">
            <img src="/images/PlansImgs/pic1.jpg" alt="" />
        </div>
        <div className="plans-header">
            <h2>
                Join Now!
            </h2>
            <h1>
                CHOOSE YOUR <span>PLAN!</span>
            </h1>
            <div className="plans-info">
                <p>
                    Choose your plan and enjoy 60,000 live stream TV channels and about 10,000 to 24,000 VODs (Video, Movie, Tv shows…)
                </p>
                <p>
                    Choose your plan and enjoy 60,000 live stream TV channels and about 10,000 to 24,000 VODs (Video, Movie, Tv shows…)
                </p>
                <p>
                    according to your Device or App.
                </p>
            </div>
        </div>
        <div className={"plans-group"} style={{justifyContent:"space-evenly"}}>
            {
                planSwitcher!==0&&(
                    <div className="back-button-plans" onClick={()=>onSelect(0)}>
                        <BsArrowLeftCircleFill style={{color:"white"}}/>
                    </div>
                )
            }
            {
                planSwitcher!==0?(
                    planSwitcher===1?(
                        <Plan price={"9.99"} duration={1} description={"Instant Activation! \n Free update (TVs and VODs) \n AntiFreeze Technology \n Over 60000 Channels Over \n 24000 Movies & TV Shows \n 4K FHD HD Channels \n Premium Channels \n Fast & Stable \n M3U & MAG & Enigma Format \n Smart TV & Smartphone & PC \n Always Uptime Server \n Free Trial Accountz \n 24/7 Online support \n 7 Day Money Back Guarantee"} change={onSelect}/>                        
                    ):planSwitcher===3?(
                        <Plan price={"19.99"} duration={3} description={"Instant Activation! \n Free update (TVs and VODs) \n AntiFreeze Technology \n Over 60000 Channels Over \n 24000 Movies & TV Shows \n 4K FHD HD Channels \n Premium Channels \n Fast & Stable \n M3U & MAG & Enigma Format \n Smart TV & Smartphone & PC \n Always Uptime Server \n Free Trial Accountz \n 24/7 Online support \n 7 Day Money Back Guarantee"} change={onSelect}/>
                    ):planSwitcher===6?(
                        <Plan price={"34.99"} duration={6} description={"Instant Activation! \n Free update (TVs and VODs) \n AntiFreeze Technology \n Over 60000 Channels Over \n 24000 Movies & TV Shows \n 4K FHD HD Channels \n Premium Channels \n Fast & Stable \n M3U & MAG & Enigma Format \n Smart TV & Smartphone & PC \n Always Uptime Server \n Free Trial Accountz \n 24/7 Online support \n 7 Day Money Back Guarantee"} change={onSelect}/>
                    ):planSwitcher===12?(
                        <Plan price={"52.99"} duration={12} description={"Instant Activation! \n Free update (TVs and VODs) \n AntiFreeze Technology \n Over 60000 Channels Over \n 24000 Movies & TV Shows \n 4K FHD HD Channels \n Premium Channels \n Fast & Stable \n M3U & MAG & Enigma Format \n Smart TV & Smartphone & PC \n Always Uptime Server \n Free Trial Accountz \n 24/7 Online support \n 7 Day Money Back Guarantee"} change={onSelect}/>
                    ):(
                        <>
                        </>
                    )
                ):(
                    <>
                        <Plan price={"9.99"} duration={1} description={"Instant Activation! \n Free update (TVs and VODs) \n AntiFreeze Technology \n Over 60000 Channels Over \n 24000 Movies & TV Shows \n 4K FHD HD Channels \n Premium Channels \n Fast & Stable \n M3U & MAG & Enigma Format \n Smart TV & Smartphone & PC \n Always Uptime Server \n Free Trial Accountz \n 24/7 Online support \n 7 Day Money Back Guarantee"} change={onSelect}/>
                        <Plan price={"19.99"} duration={3} description={"Instant Activation! \n Free update (TVs and VODs) \n AntiFreeze Technology \n Over 60000 Channels Over \n 24000 Movies & TV Shows \n 4K FHD HD Channels \n Premium Channels \n Fast & Stable \n M3U & MAG & Enigma Format \n Smart TV & Smartphone & PC \n Always Uptime Server \n Free Trial Accountz \n 24/7 Online support \n 7 Day Money Back Guarantee"} change={onSelect}/>
                        <Plan price={"34.99"} duration={6} description={"Instant Activation! \n Free update (TVs and VODs) \n AntiFreeze Technology \n Over 60000 Channels Over \n 24000 Movies & TV Shows \n 4K FHD HD Channels \n Premium Channels \n Fast & Stable \n M3U & MAG & Enigma Format \n Smart TV & Smartphone & PC \n Always Uptime Server \n Free Trial Accountz \n 24/7 Online support \n 7 Day Money Back Guarantee"} change={onSelect}/>
                        <Plan price={"52.99"} duration={12} description={"Instant Activation! \n Free update (TVs and VODs) \n AntiFreeze Technology \n Over 60000 Channels Over \n 24000 Movies & TV Shows \n 4K FHD HD Channels \n Premium Channels \n Fast & Stable \n M3U & MAG & Enigma Format \n Smart TV & Smartphone & PC \n Always Uptime Server \n Free Trial Accountz \n 24/7 Online support \n 7 Day Money Back Guarantee"} change={onSelect}/>
                    </>
                    )
                }
                {
                    planSwitcher!==0&&(
                        <div className="buy-plan-form">
                            <div className="buy-plan-form-info">
                                <div className="buy-plan-header">
                                    <h2>
                                        Checkout
                                    </h2>
                                </div>
                                {
                                    checkeout?(
                                        <div className="buy-plan-form-paypal" onClick={()=>purchaseHandler()}>
                                            <div ref={paypal}></div>                                            
                                        </div>
                                    ):(
                                        <div className="form">
                                            <div className="row">
                                                <h5>
                                                    Your Email
                                                </h5>
                                                <input type="email" name='email' placeholder='example@domain.com'ref={ref=>ref!==null&&(infoRef.current[ref.name] = ref)}/>
                                            </div>
                                            <div className="row">
                                                <h3>
                                                    SHIPPING INFORMATION
                                                </h3>
                                                <div>
                                                    <h5>
                                                        Full name
                                                    </h5>
                                                    <input type="text" name='full_name' placeholder='Full Name' ref={ref=>ref!==null&&(infoRef.current[ref.name] = ref)}/>
                                                    <h5>
                                                        Phone number
                                                    </h5>
                                                    <input type="text" name='phone_number' placeholder='Phone number' ref={ref=>ref!==null&&(infoRef.current[ref.name] = ref)}/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <h5>
                                                    Adult channels
                                                </h5>
                                                <select name="adult" id="">
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                </select>
                                            {/* <select name="country" onChange={(e)=>{e.target.value!=="select country ----"&&(setCountry(e.target.value))}}>
                                                <option value="select country ----">Select country -----</option>
                                                {
                                                    countrySelect.map((item)=>(
                                                        <option value={item.item} key={item.key}>{item.item}</option>
                                                    ))
                                                }
                                            </select> */}
                                            </div>
                                            <div className="row">
                                                <button className="submit" onClick={()=>submitFormHandler()}>
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="bg-diagonal"></div>
    </div>
  )
}
