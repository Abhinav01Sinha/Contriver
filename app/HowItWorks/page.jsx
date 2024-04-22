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
import Link from "next/link";

function HowItWorksPage() {
  return (
    <>
      {/* How it Works */}
      <div
        id="how-it-works"
        className="bg-contriverBgRotatePhone lg:bg-contriverBgFlip bg-cover bg-no-repeat bg-top"
      >
        {/* Go-To Bar */}
        <div className="hidden lg:flex flex-row justify-center items-center pt-8">
          <p className="px-5 py-2 text-lg bg-blue-50 text-gray-700 font-bold">
            NAVIAGATE TO :
          </p>

          <Link
            className="px-5 py-2 border-2 border-solid border-black bg-gray-700 text-blue-50 font-semibold"
            href={"#how-it-works"}
          >
            How It Works ?
          </Link>
          <Link
            className="px-5 py-2 border-2 border-solid border-black bg-gray-700 text-blue-50 font-semibold"
            href={"#who-does-it"}
          >
            Who Does It ?
          </Link>
          <Link
            className="px-5 py-2 border-2 border-solid border-black bg-gray-700 text-blue-50 font-semibold"
            href={"#how-much-we-require"}
          >
            How Much We Require ?
          </Link>
          <Link
            className="px-5 py-2 border-2 border-solid border-black bg-gray-700 text-blue-50 font-semibold"
            href={"#scale-up-process"}
          >
            Scale Up Process ?
          </Link>
        </div>

        <div className="flex lg:flex-row py-10 lg:py-20 lg:px-10 flex-col">
          {/* Mobile view */}
          <div className="lg:hidden inline-block flex flex-col text-center mb-2 justify-center items-center">
            <p className="lg:text-7xl text-5xl font-bold text-gray-700 mt-2 mb-4">
              HOW IT WORKS ?
            </p>
          </div>

          {/* PC view */}
          <div className="lg:flex flex-col lg:w-1/3 text-center mb-2 justify-center items-center hidden">
            <p className="lg:text-7xl text-5xl font-bold text-gray-700 my-2">
              HOW IT{" "}
            </p>
            <p className="lg:text-7xl text-5xl font-bold text-gray-700 my-2">
              WORKS?
            </p>
          </div>
          <Timeline className="flex lg:w-2/3" position="alternate-reverse">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #334963",
                  }}
                >
                  <LooksOneOutlined style={{ color: "#334963" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-center hover:shadow-lg max-w-3xl rounded-xl bg-white border-gray-700 border-2 border-solid py-4 lg:px-6 px-2 lg:text-md">
                  We first find mundane problems that are affecting large group
                  of people in businesses and in usual scenarios.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #334963",
                  }}
                >
                  <LooksTwoOutlined style={{ color: "#334963" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-center hover:shadow-lg max-w-3xl rounded-xl bg-white border-gray-700 border-2 border-solid py-4 lg:px-6 px-2 lg:text-md">
                  We then go for a literature review and find business potential
                  in the problem and value that can be added if the problem is
                  solved.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #334963",
                  }}
                >
                  <Looks3Outlined style={{ color: "#334963" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-center hover:shadow-lg max-w-3xl rounded-xl bg-white border-gray-700 border-2 border-solid py-4 lg:px-6 px-2 lg:text-md">
                  We then work out for solutions that are thematically
                  autonomous and require least human interference as most
                  problems that we look for are quite mundane.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #334963",
                  }}
                >
                  <Looks4Outlined style={{ color: "#334963" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-center hover:shadow-lg max-w-3xl rounded-xl bg-white border-gray-700 border-2 border-solid py-4 lg:px-6 px-2 lg:text-md">
                  We then look for potential channels by which the business can
                  be established.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #334963",
                  }}
                >
                  <Looks5Outlined style={{ color: "#334963" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-center hover:shadow-lg max-w-3xl rounded-xl bg-white border-gray-700 border-2 border-solid py-4 lg:px-6 px-2 lg:text-md">
                  We then contact and connect those businesses and share our
                  ideas to them while giving the idea of potential value that
                  can be added.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #334963",
                  }}
                >
                  <Looks6Outlined style={{ color: "#334963" }} />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="text-center hover:shadow-lg max-w-3xl rounded-xl bg-white border-gray-700 border-2 border-solid py-4 lg:px-6 px-2 lg:text-md">
                  Once the channel is set we then develop a system and deliver
                  to the first business/person.
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>

      {/* Who Does It Section */}
      <div id="who-does-it" className="bg-blue-50 ">
        <div className="flex lg:flex-row py-10 lg:py-20 lg:px-10 flex-col">
          {/* Mobile view */}
          <div className="lg:hidden inline-block flex flex-col text-center mb-2 justify-center items-center">
            <p className="lg:text-7xl text-5xl font-bold text-gray-700 mt-2 mb-4">
              WHO DOES IT ?
            </p>
          </div>

          <Timeline className="flex lg:w-2/3" position="alternate-reverse">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #334963",
                  }}
                >
                  <LooksOneOutlined style={{ color: "#334963" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="bg-gray-700 rounded-xl text-blue-50 text-center hover:shadow-2xl shadow-gray-700/50 max-w-3xl border- border-2 border-solid py-4 lg:px-6 px-2 lg:text-lg">
                  With the tactical skills that we have developed first problem
                  seeking is done by research team.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #334963",
                  }}
                >
                  <LooksTwoOutlined style={{ color: "#334963" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="bg-gray-700 rounded-xl text-blue-50 text-center hover:shadow-2xl shadow-gray-700/50 max-w-3xl border- border-2 border-solid py-4 lg:px-6 px-2 lg:text-lg">
                  Once the problem is decided, a team sees and does a literature
                  review and possibilities of value addition.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #334963",
                  }}
                >
                  <Looks3Outlined style={{ color: "#334963" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="bg-gray-700 rounded-xl text-blue-50 text-center hover:shadow-2xl shadow-gray-700/50 max-w-3xl border- border-2 border-solid py-4 lg:px-6 px-2 lg:text-lg">
                  Director’s Office sees the prospect spaces where thematically
                  the company can help and benefit. This also includes addition
                  in skills and expansion in capabilities as a company.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #334963",
                  }}
                >
                  <Looks4Outlined style={{ color: "#334963" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="bg-gray-700 rounded-xl text-blue-50 text-center hover:shadow-2xl shadow-gray-700/50 max-w-3xl border- border-2 border-solid py-4 lg:px-6 px-2  lg:text-lg">
                  An outsourced or internal team is hired for business
                  development with ppts to reach out to potential businesses OR
                  we contact the business in pain directly.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #334963",
                  }}
                >
                  <Looks5Outlined style={{ color: "#334963" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="bg-gray-700 rounded-xl text-blue-50 text-center hover:shadow-2xl shadow-gray-700/50 max-w-3xl border- border-2 border-solid py-4 lg:px-6 px-2 lg:text-lg">
                  A software team looks into development.
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "white",
                    border: "2px solid #334963",
                  }}
                >
                  <Looks6Outlined style={{ color: "#334963" }} />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent className="animate-fade-down animate-once animate-duration-1000 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards">
                <div className="bg-gray-700 rounded-xl text-blue-50 text-center hover:shadow-2xl shadow-gray-700/50 max-w-3xl border- border-2 border-solid py-4 lg:px-6 px-2 lg:text-lg">
                  Finally the Director’s Office oversees the process and
                  delivers the project.
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>

          {/* PC view */}
          <div className="lg:flex flex-col lg:w-1/3 text-center mb-2 justify-center items-center hidden">
            <p className="lg:text-7xl text-5xl font-bold text-gray-700 my-2">
              WHO{" "}
            </p>
            <p className="lg:text-7xl text-5xl font-bold text-gray-700 my-2">
              DOES IT?
            </p>
          </div>
        </div>
      </div>

      {/* How much we require and for What? */}
      <div
        id="how-much-we-require"
        className="bg-contriverBgRotatePhone lg:bg-contriverBgRotate bg-cover bg-no-repeat "
      >
        <div className="flex py-10 lg:py-10 lg:px-10 flex-col space-y-10 justify-center items-center">
          <h1 className="sm:text-3xl md:text-4xl text-xl text-gray-700 font-bold capitalize">
            How much we require and for what ?
          </h1>
          <div className="flex flex-col lg:flex-row px-10 2xl:px-20">
            {/* Steps */}
            <div className="flex flex-col lg:w-1/2 justify-center items-center space-y-10 lg:pr-20 mb-10 lg:mb-0">
              <div className="w-full flex flex-row space-x-5 bg-white rounded-xl border-2 border-solid border-black p-4">
                <LooksOneSharpIcon
                  className="my-auto text-gray-700"
                  style={{ fontSize: "4rem" }}
                />
                <p>
                  We are asking for total ₹10L for development of the prototype.
                  The fund is for the raw materials and equipment that will go
                  into the aircraft only.
                </p>
              </div>
              <div className="w-full flex flex-row space-x-5 bg-white rounded-xl border-2 border-solid border-black p-4">
                <LooksTwoSharpIcon
                  className="my-auto text-gray-700"
                  style={{ fontSize: "4rem" }}
                />

                <p>
                  We are asking for total ₹10L for development of the prototype.
                  The fund is for the raw materials and equipment that will go
                  into the aircraft only.
                </p>
              </div>
              <div className="w-full flex flex-row space-x-5 bg-white rounded-xl border-2 border-solid border-black p-4">
                <Looks3Sharp
                  className="my-auto text-gray-700"
                  style={{ fontSize: "4rem" }}
                />

                <p>
                  We are asking for development of the prototype, product,
                  service or research. The fund is for the raw materials,
                  equipment and humanpower.
                </p>
              </div>
              <div className="w-full flex flex-row space-x-5 bg-white rounded-xl border-2 border-solid border-black p-4">
                <Looks4Sharp
                  className="my-auto text-gray-700"
                  style={{ fontSize: "4rem" }}
                />

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
            <div className="flex flex-col lg:w-1/2 lg:justify-center lg:items-center space-y-5 ">
              <p className="block w-full sm:w-1/2 mx-auto lg:hidden rounded-2xl bg-blue-50 p-2 text-gray-700 text-center border-black border-2 border-solid text-xl lg:text-2xl font-bold capitalize mb-2">
                Breakout of the Raw Materials
              </p>

              <table className="border-black border-2 border-solid">
                <thead className="bg-gray-700 text-blue-50">
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

              <p className="hidden lg:block rounded-2xl bg-blue-50 px-5 py-2 text-gray-700 text-center border-black border-2 border-solid text-xl lg:text-2xl font-bold capitalize mb-2">
                Breakout of the Raw Materials
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Is there a scale up process and something more? */}
      <div id="scale-up-process" className="bg-blue-50 ">
        <div className="flex py-10 lg:py-10 lg:pb-20 lg:px-2 flex-col space-y-10 justify-center items-center">
          <h1 className="text-gray-700 lg:text-5xl sm:text-3xl text-2xl text-center font-bold capitalize">
            Scale up process and something more ?
          </h1>

          <div className="flex flex-col lg:flex-row lg:px-5 2xl:px-20 text-lg ">
            <div className="flex flex-row lg:w-1/4 space-x-4 bg-blue-50 py-4 px-2">
              <LooksOneSharpIcon
                className="my-auto text-gray-700"
                style={{ fontSize: "4rem" }}
              />
              <p className="my-auto">
                Based on the total delivery, we then work for scale up process.
              </p>
            </div>
            <div className="flex flex-row lg:w-1/4 space-x-4 bg-blue-50 py-4 px-2">
              <LooksTwoSharpIcon
                className="my-auto text-gray-700"
                style={{ fontSize: "4rem" }}
              />

              <p className="my-auto">
                Based on clients requirements we have given thought process for
                floor plans for development and maximum productivity of the
                institutions.
              </p>
            </div>
            <div className="flex flex-row lg:w-1/4 space-x-4 bg-blue-50 py-4 px-2">
              <Looks3Sharp
                className="my-auto text-gray-700"
                style={{ fontSize: "4rem" }}
              />

              <p className="my-auto">
                {" "}
                We have given lectures as well courses for understanding the
                entire systems better by the people of the clients.
              </p>
            </div>
            <div className="flex flex-row lg:w-1/4 space-x-4 bg-blue-50 py-4 px-2">
              <Looks4Sharp
                className="my-auto text-gray-700"
                style={{ fontSize: "4rem" }}
              />

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
