import { Button, Paper } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

import { ErrorResponse } from "../../../../../../../shared/consts/error";
import { GetAllCarsPath } from "../../../../../../../shared/endpoints/cars/getAllCars";
import { GetAllConfigsPath, GetAllConfigsResponse } from "../../../../../../../shared/endpoints/configs/getAllConfigs";
import { Input } from "../../../../../core/components/kit/Input/Input";
import { Modal } from "../../../../../core/components/kit/Modal/Modal";
import { Typography } from "../../../../../core/components/kit/Typography/Typography";
import { api } from "../../../../../core/config/api";
import { Header } from "../Header/Header";
import { ItemCard } from "../ItemCard/ItemCard";

export const Configs = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [errorModal, setErrorModal] = useState<boolean>(false);

  useEffect(() => {
    getConfigs();
  }, []);

  const { data: configsData, mutate: getConfigs } = useMutation<
    AxiosResponse<GetAllConfigsResponse>,
    AxiosError<ErrorResponse>
  >([GetAllConfigsPath], () => api.get(GetAllConfigsPath));

  return (
    <>
      {/* <Modal open={modal} onClose={() => setModal(false)}>
        <Input />
      </Modal>
      <Modal
        modalTitle={<Typography variant="h6">Delete these configs first</Typography>}
        open={errorModal}
        onClose={() => setErrorModal(false)}
      >
        <>
          {deleteError?.response?.data.configs?.map((config) => (
            <Paper key={config.id}>{config.title}</Paper>
          ))}
        </>
      </Modal>
      <Header>
        <Button onClick={() => setModal(true)}>Add</Button>
      </Header>
      {configsData?.data.cars.map((car) => (
        <ItemCard
          actions={
            <>
              <Button variant="text">Update</Button>
              <Button onClick={() => deleteConfig({ id: car.id })} variant="text">
                Delete
              </Button>
            </>
          }
          key={car.id}
        >
          {car.name}
        </ItemCard>
      ))} */}
    </>
  );
};
