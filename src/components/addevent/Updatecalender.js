import React, { useState } from 'react'
import Logo from '../../logo.svg'
import Global from '../../img/globe2.svg'
import Layers from '../../img/layers.svg'
import Calendar from '../../img/calendar2-date.svg'
import Location from '../../img/geo-alt.svg'
import Ticket from '../../img/ticket-perforated.svg'
import Edit from '../../img/pencil.svg'
import Approval from '../../img/icons8-checkmark.svg'
import Denied from '../../img/icons8-cancel.svg'
import Upload from '../../img/upload.svg'
import RequireApproval from '../../img/checkmark-male-user-icon.svg'
import ThemeImage from '../../img/upload-image-icon.svg'
import WhiteTheme from '../../img/whitetheme.png'
import HolidayTheme from '../../img/holidaytheme.png'
import AbstractTheme from '../../img/abstracttheme.png'
import QuantumTheme from '../../img/quantumtheme.png'
import SortArrow from '../../img/sort-arrows-icon.svg'
import './UpdatecalenderStyle.css'

export default function Updatecalender() {

    const [approvalactive, setApprovalactive] = useState(false);
    const [deniedactive, setDeniedactive] = useState(false);

    const changeapproval = () => {
        setApprovalactive(!approvalactive);
        if (deniedactive == true) {
            setDeniedactive(!deniedactive);
        }
    }

    const changedenied = () => {
        setDeniedactive(!deniedactive);
        if (approvalactive == true) {
            setApprovalactive(!approvalactive);
        }
    }

    return (
        <div>
            <div className='lrcontain'>
                <div className='left-right-container'>
                    <div className='left'>
                        <div className='pheading'>
                            <div className='pleft'>
                                <img src={Logo} />
                            </div>
                            <div className='pcenter'>
                                <p className='create'>Create under</p>
                                <p className='pcal'>Personal Calendar</p>
                            </div>
                        </div>
                        <div className='input-field'>
                            <input type='text' placeholder='Event Name' />
                        </div>
                        <div className='dtcontainer'>
                            <div className='calender-img'>
                                <img src={Calendar} />
                            </div>
                            <div className='date-time'>
                                <div className='date'>
                                    <div className='start'>
                                        <p style={{ padding: "5px 50px 5px 10px", marginTop: "3px" }}>Start</p>
                                        <p style={{ marginTop: "2px", marginRight: "5px", backgroundColor: "rgba(207, 207, 207, 0.662)", borderRadius: "4px" }}>
                                            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker label={'Date'} />
                                    </LocalizationProvider> */}
                                            <input type='date' className='date-input' />
                                        </p>
                                        <p style={{ marginTop: "2px", marginRight: "3px", backgroundColor: "rgba(207, 207, 207, 0.662)", borderRadius: "4px" }}>
                                            <input type='time' className='time-input' />
                                        </p>
                                    </div>
                                    <div className='end'>
                                        <p style={{ padding: "5px 58.5px 5px 10px", marginTop: "3px", marginBottom: "3px" }}>End</p>
                                        <p style={{ marginBottom: "3px", marginRight: "5px", backgroundColor: "rgba(207, 207, 207, 0.662)", borderRadius: "4px" }}>
                                            <input type='date' className='date-input' />
                                        </p>
                                        <p style={{ marginRight: "3px", marginBottom: "3px", backgroundColor: "rgba(207, 207, 207, 0.662)", borderRadius: "4px" }}>
                                            <input type='time' className='time-input' />
                                        </p>
                                    </div>
                                </div>
                                <div className='extradetail'>
                                    <p style={{ marginBottom: "5px" }}><img src={Global} />GMT +5:30 Calcutta</p>
                                    <hr />
                                    <p style={{ marginTop: "5px", marginBottom: "5px" }}><img src={Layers} />Create Multi-Session Event</p>
                                </div>
                            </div>
                        </div>
                        <div className='location'>
                            <div className='location-img'>
                                <img src={Location} />
                            </div>
                            <div className='location-desc'>
                                <p className='laddevent'>Add Event Location</p>
                                <input type='text' className='loffine' placeholder='Offline location or virtual link' />
                            </div>
                        </div>
                        <div className='event-options'>
                            <p className='eventoptionsname'>Event Options</p>
                            <div className='event-features'>
                                <div className='event-tickets'>
                                    <div className='ticket-left'>
                                        <img src={Ticket} />
                                        <p>Tickets</p>
                                    </div>
                                    <div className='ticket-right'>
                                        <input style={{ width: "50px" }} type='text' className='capacity-input' placeholder='Free'/>
                                        <img src={Edit} />
                                    </div>
                                </div>
                                <hr className='event-option-hr' />
                                <div className='event-tickets'>
                                    <div className='ticket-left'>
                                        <img src={RequireApproval} style={{ width: "20px" }} />
                                        <p style={{ width: "150px" }}>Require Approval</p>
                                    </div>
                                    <div className='ticket-right'>
                                        <img src={Approval} className='approval' onClick={changeapproval} style={{ backgroundColor: approvalactive ? "red" : "black" }} />
                                        <img src={Denied} className='denied' onClick={changedenied} style={{ backgroundColor: deniedactive ? "red" : "black" }} />
                                    </div>
                                </div>
                                <hr className='event-option-hr' />
                                <div className='event-tickets'>
                                    <div className='ticket-left'>
                                        <img src={Upload} />
                                        <p>Capacity</p>
                                    </div>
                                    <div className='ticket-right'>
                                        <input type='text' className='capacity-input' placeholder='Unlimited'/>
                                        <img src={Edit} />
                                    </div>
                                </div>
                                <hr className='event-option-hr' />
                                <div className='event-tickets'>
                                    <div className='ticket-left'>
                                        <img src={Global} />
                                        <p>Visibility</p>
                                    </div>
                                    <div className='ticket-right'>
                                        <select className='form-select'>
                                            <option>Public</option>
                                            <option>Private</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='event-btn'>
                            <button className='create-event-btn'>Create Event</button>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='theme-display'>
                            <div className='theme-display-text'>
                                <p>Hello, My name is <span style={{ color: "red" }}>Jatin Kumar</span> and I'm an software Engineer, but I love to do many activities like biking, reading and travelling around the world.</p>
                            </div>
                            <div className='theme-display-image'>
                                <img src={ThemeImage} />
                            </div>
                        </div>
                        <div className='theme-section'>
                            <p className='themesectionname'>Theme</p>
                            <div className='theme-selection'>
                                <div className='indtheme'>
                                    <img src={WhiteTheme} />
                                    <p>Minimal</p>
                                </div>
                                <div className='indtheme'>
                                    <img src={HolidayTheme} />
                                    <p>Holiday</p>
                                </div>
                                <div className='indtheme'>
                                    <img src={AbstractTheme} />
                                    <p>Abstract</p>
                                </div>
                                <div className='indtheme'>
                                    <img src={QuantumTheme} />
                                    <p>Quantum</p>
                                </div>
                            </div>
                        </div>
                        <div className='color-font-section'>
                            <div className='color-section'>
                                <div className='color-section-left'>
                                    <div className='color-indicater'></div>
                                    <p>Color</p>
                                </div>
                                <div className='color-section-right'>
                                    <p>Gray</p>
                                    <img src={SortArrow} />
                                </div>
                            </div>
                            <hr style={{ opacity: "0.2" }} />
                            <div className='color-section'>
                                <div className='color-section-left'>
                                    <p style={{ color: "black", marginRight: "10px", fontSize: "18px", fontWeight: "600" }}>Ag</p>
                                    <p>Typeface</p>
                                </div>
                                <div className='color-section-right'>
                                    <p>Default</p>
                                    <img src={SortArrow} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
