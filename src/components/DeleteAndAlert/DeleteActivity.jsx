import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ButtonCancelled from "../Button/ButtonCancelled";
import ButtonDelete from "../Button/ButtonDelete";
import ActivityService from "../../services/activity";
import TodoItemService from "../../services/todoItem";
import AlertActivity from "./AlertActivity";
import modalDelete from "../../assets/Images/Modal/modal-delete-icon.png";

const DeleteActivity = ({
  open,
  setOpen,
  selectedActivity,
  refresh,
  setConfirmationPopup,
  page,
  todo,
}) => {
  function closeModal() {
    setOpen(false);
  }

  const [alertComponent, setAlertComponent] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteTodo = async (id) => {
    setLoading(true);
    await TodoItemService.deleteSingleTodo(id);
    setLoading(false);
    setOpen(false);
    setAlertComponent(!alertComponent);
    refresh();
  };
  const onDeleteActivity = async (id) => {
    setLoading(true);
    await ActivityService.deleteActivity(id);
    setLoading(false);
    setOpen(false);
    setConfirmationPopup(true);
    refresh();
  };

  useEffect(() => {}, [loading]);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div data-cy="modal-delete" className="fixed inset-0 overflow-y-auto">
          <AlertActivity
            alertComponent={alertComponent}
            setAlertComponent={setAlertComponent}
          />
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                data-cy="modal-delete"
                className="h-[355px] w-[490px] max-w-md transform overflow-hidden 
              rounded-2xl bg-white px-[40px] text-left align-middle shadow-xl transition-all 2xl:px-[62px]"
              >
                <div className="mt-2 flex flex-col items-center justify-center">
                  <img
                    data-cy="modal-delete-icon"
                    width={84}
                    height={84}
                    className="mt-[40px] mb-[34px] object-contain"
                    src={modalDelete}
                    alt="modal delete"
                  />
                  <p
                    data-cy="modal-delete-title"
                    className="text-center text-lg font-medium text-txtBlack "
                  >
                    Apakah anda yakin ingin menghapus
                    {page === "dashboard" ? (
                      <p className="text-lg font-bold">
                        {" "}
                        "{selectedActivity[1]}"?
                      </p>
                    ) : (
                      <p className="text-lg font-bold">
                        "{todo.title}"{" "}
                        <span className="text-center text-lg font-medium text-txtBlack">
                          ?
                        </span>
                      </p>
                    )}
                  </p>
                </div>

                <div className="mt-4 flex justify-between gap-x-5">
                  <ButtonCancelled
                    dataCy="modal-delete-cancel-button"
                    onClick={closeModal}
                  />
                  {page === "dashboard" ? (
                    <ButtonDelete
                      dataCy="modal-delete-confirm-button"
                      loadingComponent={loading}
                      onClick={() => onDeleteActivity(selectedActivity[0])}
                    />
                  ) : (
                    <ButtonDelete
                      loadingComponent={loading}
                      onClick={() => deleteTodo(todo.id)}
                    />
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DeleteActivity;
