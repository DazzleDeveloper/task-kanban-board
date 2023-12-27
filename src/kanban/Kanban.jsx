import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import mockData from "../../src/mockData";
import { Card } from "../cards/Card";
import { FaRegClock } from "react-icons/fa";
import { GoTriangleUp } from "react-icons/go";
import {Footer} from '../pages/Footer'


export function Kanban() {
  const [data, setData] = useState(mockData);
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );
      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];
      //convertiendo para que se pueda mappear
      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData([...data]); // Corrección aquí
    }
  };

  return (<><DragDropContext onDragEnd={onDragEnd}>
      <div className="flex  items-start justify-center gap-5  text-center text-sm  lg:text-sm md:gap-3 md:text-sm lg:gap-5 xs:text-xs xs:gap-1  flex-wrap  ">
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className="mt-10 pt-5 rounded-[5px] bg-[#141519] font-montserrat text-white "
                ref={provided.innerRef}
              >
                {section.title}
                <div className="text-white   font-montserrat bg-[#141519] rounded-sm p-3 text-start  ">
                  <div >
                    {section.tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              opacity: snapshot ? "1" : "0.5",
                            }}
                            className="bg-[#181B24] mt-3 rounded-xl  p-5 hover:border-[#2646AB] hover:border-[1px] hover:border-solid  hover:rounded-xl  shadow-2xl hover:cursor-pointer hover:bg-[#0b0e1a]  "
                          >
                            <Card>
                              <div className="flex justify-between items-center ">
                              <h1 className="text-lg font-bold  text-white  sm:text-xs  lg:text-lg md:text-sm xs:text-xs">
                                {task.title}
                              </h1>
                              <img className="rounded-full lg:w-10 md:w-10 sm:w-5 xs:w-0" src={task.profile} alt={task.name} />
                              </div>
                              <p className="text-xs font-montserrat font-light text-white mt-5 sm:text-[10px] lg:text-xs md:text-[12px] ">
                                {" "}
                                {task.desc}
                              </p>
                              <div className="flex items-center justify-between mt-5">
                                <span className="text-xs lg:text-xs  font-montserrat font-semibold text-[#7b7e8d]  flex justify-center items-center w-[100px] h-[20px] bg-[#2B2E35] rounded-full sm:w-[90px] sm:h-auto lg:w-[100px] lg:h-[20px] md:w-[90px] md:h-[20px] sm:text-[12px] ">
                                  <FaRegClock className="text-[#7b7e8d] mr-1 " />
                                  {task.date}
                                </span>
                                <span className="text-xs font-montserrat font-semibold text-[#88DC63] place-items-center justify-center flex  sm:w-[50px] sm:h-[15px] lg:w-[50px] lg:h-[20px] bg-[#2B2E35] rounded-full md:w-[50px] md:h-[20px] xs:h-[20px] xs:w-[50px] ">
                                  <GoTriangleUp className="text-base"/>
                                  {task.progress}
                                </span>
                              </div>
                            </Card>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
    <Footer/></>
    
  );
}
