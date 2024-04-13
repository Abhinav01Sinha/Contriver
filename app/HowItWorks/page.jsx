import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import React from "react";
import {
  Looks3Outlined,
  Looks3Sharp,
  Looks4Outlined,
  Looks4Sharp,
  Looks5Outlined,
  Looks6Outlined,
  LooksOneOutlined,
  LooksTwoOutlined,
} from "@mui/icons-material";
import LooksOneSharpIcon from "@mui/icons-material/LooksOneSharp";
import LooksTwoSharpIcon from "@mui/icons-material/LooksTwoSharp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function HowItWorksPage() {
  return (
    <>
      {/* How it Works */}
      <div className="bg-blue-400">
        <div className="flex lg:flex-row py-10 sm:py-20 sm:px-10 flex-col">
          <div className="flex flex-col sm:w-1/3 text-center mb-2 justify-center items-center animate-fade-right animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
            <p className="sm:text-7xl text-6xl font-bold text-white my-2">
              HOW IT{" "}
            </p>
            <p className="sm:text-7xl text-6xl font-bold text-white my-2">
              WORKS ?
            </p>
          </div>
          <Timeline className="flex sm:w-2/3 " position="alternate-reverse">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-white border-2 border-black border-solid">
                  <LooksOneOutlined className="text-black" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-center hover:shadow-lg max-w-3xl bg-white border-2 border-black border-solid py-4 sm:px-6 px-2 sm:text-md">
                  We first find mundane problems that are affecting large group
                  of people in businesses and in usual scenarios.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-white border-2 border-black border-solid">
                  <LooksTwoOutlined className="text-black" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-center hover:shadow-lg max-w-3xl bg-white border-2 border-black border-solid py-4 sm:px-6 px-2 sm:text-md">
                  We then go for a literature review and find business potential
                  in the problem and value that can be added if the problem is
                  solved.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-white border-2 border-black border-solid">
                  <Looks3Outlined className="text-black" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-center hover:shadow-lg max-w-3xl bg-white border-2 border-black border-solid py-4 sm:px-6 px-2 sm:text-md">
                  We then work out for solutions that are thematically
                  autonomous and require least human interference as most
                  problems that we look for are quite mundane.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-white border-2 border-black border-solid">
                  <Looks4Outlined className="text-black" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-center hover:shadow-lg max-w-3xl bg-white border-2 border-black border-solid py-4 sm:px-6 px-2 sm:text-md">
                  We then look for potential channels by which the business can
                  be established.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-white border-2 border-black border-solid">
                  <Looks5Outlined className="text-black" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-center hover:shadow-lg max-w-3xl bg-white border-2 border-black border-solid py-4 sm:px-6 px-2 sm:text-md">
                  We then contact and connect those businesses and share our
                  ideas to them while giving the idea of potential value that
                  can be added.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-white border-2 border-black border-solid">
                  <Looks6Outlined className="text-black" />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-center hover:shadow-lg max-w-3xl bg-white border-2 border-black border-solid py-4 sm:px-6 px-2 sm:text-md">
                  Once the channel is set we then develop a system and deliver
                  to the first business/person.
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>

      {/* Who Does It Section */}
      <div className="bg-black">
        <div className="flex lg:flex-row py-10 sm:py-20 sm:px-10 flex-col">
          {/* Mobile view */}
          <div className="sm:hidden inline-block flex flex-col text-center mb-2 justify-center items-center">
            <p className="sm:text-7xl text-6xl font-bold text-white my-2">
              WHO{" "}
            </p>
            <p className="sm:text-7xl text-6xl font-bold text-white my-2">
              DOES IT ?
            </p>
          </div>

          <Timeline className="flex sm:w-2/3" position="alternate-reverse">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-white border-2 border-black border-solid">
                  <LooksOneOutlined className="text-black" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-white text-center hover:shadow-lg max-w-3xl bg-blue-400 border-4 border-white border-solid py-4 sm:px-6 px-2 sm:text-lg">
                  With the tactical skills that we have developed first problem
                  seeking is done by research team.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-white border-2 border-black border-solid">
                  <LooksTwoOutlined className="text-black" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-white text-center hover:shadow-lg max-w-3xl bg-blue-400 border-4 border-white border-solid py-4 sm:px-6 px-2 sm:text-lg">
                  Once the problem is decided, a team sees and does a literature
                  review and possibilities of value addition.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-white border-2 border-black border-solid">
                  <Looks3Outlined className="text-black" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-white text-center hover:shadow-lg max-w-3xl bg-blue-400 border-4 border-white border-solid py-4 sm:px-6 px-2 sm:text-lg">
                  Director’s Office sees the prospect spaces where thematically
                  the company can help and benefit. This also includes addition
                  in skills and expansion in capabilities as a company.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-white border-2 border-black border-solid">
                  <Looks4Outlined className="text-black" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-white text-center hover:shadow-lg max-w-3xl bg-blue-400 border-4 border-white border-solid py-4 sm:px-6 px-2  sm:text-lg">
                  An outsourced or internal team is hired for business
                  development with ppts to reach out to potential businesses OR
                  we contact the business in pain directly.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-white border-2 border-black border-solid">
                  <Looks5Outlined className="text-black" />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-white text-center hover:shadow-lg max-w-3xl bg-blue-400 border-4 border-white border-solid py-4 sm:px-6 px-2 sm:text-lg">
                  A software team looks into development.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className="bg-white text-white border-2 border-black border-solid">
                  <Looks6Outlined className="text-black" />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-white text-center hover:shadow-lg max-w-3xl bg-blue-400 border-4 border-white border-solid py-4 sm:px-6 px-2 sm:text-lg">
                  Finally the Director’s Office oversees the process and
                  delivers the project.
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>

          {/* PC view */}
          <div className="sm:flex flex-col sm:w-1/3 text-center mb-2 justify-center items-center hidden">
            <p className="sm:text-7xl text-6xl font-bold text-white my-2">
              WHO{" "}
            </p>
            <p className="sm:text-7xl text-6xl font-bold text-white my-2">
              DOES IT?
            </p>
          </div>
        </div>
      </div>

      {/* How much we require and for What? */}
      <div className="bg-blue-400">
        <div className="flex py-10 sm:py-20 sm:px-10 flex-col space-y-10 justify-center items-center">
          <h1 className="sm:text-6xl text-xl text-white font-bold capitalize">
            How much we require and for what ?
          </h1>
          <div className="flex flex-col sm:flex-row px-20">
            {/* Steps */}
            <div className="flex flex-col sm:w-1/2 justify-center items-center space-y-10 sm:px-20 mb-10 sm:mb-0">
              <div className="flex flex-row space-x-5 bg-white border-2 border-solid border-black p-4">
                <LooksOneSharpIcon
                  className="my-auto"
                  style={{ fontSize: "4rem" }}
                />
                <p>
                  We are asking for total ₹10L for development of the prototype.
                  The fund is for the raw materials and equipment that will go
                  into the aircraft only.
                </p>
              </div>
              <div className="flex flex-row space-x-5 bg-white border-2 border-solid border-black p-4">
                <LooksTwoSharpIcon
                  className="my-auto"
                  style={{ fontSize: "4rem" }}
                />

                <p>
                  We are asking for total ₹10L for development of the prototype.
                  The fund is for the raw materials and equipment that will go
                  into the aircraft only.
                </p>
              </div>
              <div className="flex flex-row space-x-5 bg-white border-2 border-solid border-black p-4">
                <Looks3Sharp className="my-auto" style={{ fontSize: "4rem" }} />

                <p>
                  We are asking for development of the prototype, product,
                  service or research. The fund is for the raw materials,
                  equipment and humanpower.
                </p>
              </div>
              <div className="flex flex-row space-x-5 bg-white border-2 border-solid border-black p-4">
                <Looks4Sharp className="my-auto" style={{ fontSize: "4rem" }} />

                <div className="flex flex-col">
                  <p>
                    Once the costing is complete, we work in four phases each
                    having a value addition to our clients:
                  </p>
                  <hr className="my-2 h-0.5 bg-black" />
                  <p>
                    Initiation <ArrowForwardIcon /> POC <ArrowForwardIcon />{" "}
                    Product Validation <ArrowForwardIcon /> Testing, Delivery
                    and Improvements on Feedback
                  </p>
                </div>
              </div>
            </div>

            {/* Breakout */}
            <div className="flex flex-col sm:w-1/2 sm:justify-center sm:items-center space-y-5 ">
              <p className="text-white text-center text-xl sm:text-2xl font-bold capitalize mb-2">
                The Breakout of the raw materials is as follows :
              </p>
              <table className="border-black border-2 border-solid">
                <thead className="bg-black text-white">
                  <tr className="border-black border-2 border-solid">
                    <th className="text-center py-4 px-6 w-1/5">Amount</th>
                    <th className="text-center py-4 px-2 w-2/5">Used For</th>
                    <th className="text-center py-4 px-2 w-2/5">Details</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-black border-2 border-solid">
                    <td className="text-center py-2 px-3 border-black border-2 border-solid">
                      4L
                    </td>
                    <td className="text-center py-2 px-3 border-black border-2 border-solid">
                      Electronics Fabrication Testing and Analysis
                    </td>
                    <td className="text-center py-2 px-3 border-black border-2 border-solid">
                      GPS, Controller Boards, Custom PCB for Surface Controls,
                      Sensors
                    </td>
                  </tr>

                  <tr className="border-black border-2 border-solid">
                    <td className="text-center py-2 px-3 border-black border-2 border-solid">
                      3L
                    </td>
                    <td className="text-center py-2 px-3 border-black border-2 border-solid">
                      Power and Thrust Systems
                    </td>
                    <td className="text-center py-2 px-3 border-black border-2 border-solid">
                      Motors, In House Design Custom Requirement Propellers
                    </td>
                  </tr>

                  <tr className="border-black border-2 border-solid">
                    <td className="text-center py-2 px-3 border-black border-2 border-solid">
                      2L
                    </td>
                    <td className="text-center py-2 px-3 border-black border-2 border-solid">
                      Raw Material
                    </td>
                    <td className="text-center py-2 px-3 border-black border-2 border-solid">
                      Carbon Fabric Sheets, Adhesives, Moulds and other Fabric
                      and Reinforcement Materials
                    </td>
                  </tr>

                  <tr className="border-black border-2 border-solid">
                    <td className="text-center py-2 px-3 border-black border-2 border-solid">
                      1L
                    </td>
                    <td className="text-center py-2 px-3 border-black border-2 border-solid">
                      Contingency
                    </td>
                    <td className="text-center py-2 px-3 border-black border-2 border-solid">
                      Usually for motors and moulds.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Is there a scale up process and something more? */}
      <div className="bg-white">
        <div className="flex py-10 sm:py-20 sm:px-2 flex-col space-y-10 justify-center items-center">
          <h1 className="sm:text-5xl text-center text-2xl text-blue-400 font-bold capitalize">
            Is there a scale up process and something more ?
          </h1>

          <div className="flex flex-col sm:flex-row sm:px-20 text-lg space-x-2">
            <div className="flex flex-row sm:w-1/4 space-x-4 bg-white py-4 px-2">
              <LooksOneSharpIcon
                className="my-auto"
                style={{ fontSize: "4rem" }}
              />
              <p className="my-auto">
                Based on the total delivery, we then work for scale up process.
              </p>
            </div>
            <div className="flex flex-row sm:w-1/4 space-x-4 bg-white py-4 px-2">
              <LooksTwoSharpIcon
                className="my-auto"
                style={{ fontSize: "4rem" }}
              />

              <p className="my-auto">
                Based on clients requirements we have given thought process for
                floor plans for development and maximum productivity of the
                institutions.
              </p>
            </div>
            <div className="flex flex-row sm:w-1/4 space-x-4 bg-white py-4 px-2">
              <Looks3Sharp className="my-auto" style={{ fontSize: "4rem" }} />

              <p className="my-auto">
                {" "}
                We have given lectures as well courses for understanding the
                entire systems better by the people of the clients.
              </p>
            </div>
            <div className="flex flex-row sm:w-1/4 space-x-4 bg-white py-4 px-2">
              <Looks4Sharp className="my-auto" style={{ fontSize: "4rem" }} />

              <p className="my-auto">
                We look forward to complete value addition wherever deems fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorksPage;
