import "./style.scss";
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Days from "../../Components/Days/Days";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { addTeacher, getTeacherInfo } from "../../firebase/Teachers";
import { countries } from "../../functions/Countries";
import SaveIcon from "@mui/icons-material/Save";
import { isLogged, userInfo } from "../../functions/Account";
import { useFirebase, useMutationFirebase } from "../../Hooks/useFirebase";
import ButtonWithIcon from "../../Components/ButtonWithIcon/ButtonWithIcon";
import dayjs from "dayjs";
import SystemMessage from "../../Components/SystemMessage/SystemMessage";

export default () => {
  const navigate = useNavigate();

  const {
    data: mutationData,
    mutate,
    isLoading: mutationLoading,
  } = useMutationFirebase(addTeacher);
  const form = useRef<any>({
    name: useRef(),
    country: useRef(),
    Boi: useRef(),
    availability: useRef(),
  });

  useEffect(() => {
    if (!isLogged()) {
      navigate("/login", { replace: true });
    }
  }, []);

  const { data, isLoading } = useFirebase(getTeacherInfo(userInfo().teacherId));

  const [error, setError] = useState({ show: false, massage: "" });

  useEffect(() => {
    if (mutationData) {
      navigate(0);
    }
  }, [mutationData]);
  return (
    <>
      <h1 style={{ color: "black", marginTop: 100, textAlign: "center" }}>
        Teacher information
      </h1>
      <div style={{ marginTop: 50, display: "flex", justifyContent: "center" }}>
        <SystemMessage open={error.show} text={error.massage} />

        {isLoading && <LoadingSpinner />}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {!isLoading && (
            <div className="teacherFields">
              <TextField
                label="Full name"
                ref={form.current.name}
                defaultValue={data?.name || ""}
                variant="standard"
                style={{ marginBottom: "100px" }}
              />
              <Autocomplete
                ref={form.current.country}
                disablePortal
                options={countries}
                sx={{ width: 300 }}
                defaultValue={data?.country}
                renderInput={(params) => (
                  <TextField {...params} label="Lives in" />
                )}
              />
              <TextField
                InputLabelProps={
                  {
                    // style: { fontSize: "50px" },
                  }
                }
                id="standard-multiline-static"
                ref={form.current.Boi}
                label="Bio"
                multiline
                rows={4}
                defaultValue={data?.description || ""}
                variant="standard"
              />
            </div>
          )}
          {!isLoading && (
            <Days
              refe={form.current.availability}
              availableDays={data?.availableDays || ""}
            />
          )}
          <ButtonWithIcon
            loading={mutationLoading}
            style={{ backgroundColor: "#256928", margin: 100, width: "50%" }}
            Icon={SaveIcon}
            text="Save"
            spinnerColor="primary"
            onClick={() => {
              const boi =
                form.current.Boi.current.childNodes[1].childNodes[0].value;
              const country =
                form.current.country.current.childNodes[0].childNodes[1]
                  .childNodes[0].value;
              const name =
                form.current.name.current.childNodes[1].childNodes[0].value;

              const availability = form.current.availability;

              if (!boi || !country || !name) {
                setError({
                  show: true,
                  massage: "please fill all of the fields",
                });
                return;
              }
              if (name.length < 5) {
                setError({
                  show: true,
                  massage: "please fill your full name",
                });
                return;
              }
              if (boi.length < 10) {
                setError({
                  show: true,
                  massage: "Bio is too short!",
                });
                return;
              }

              mutate({
                availableDays: availability.current.map((e: any) =>
                  e.map((e: any) => {
                    return {
                      to: dayjs(e.to, "HH:mm").format("HH:mm"),
                      from: dayjs(e.from, "HH:mm").format("HH:mm"),
                    };
                  })
                ),
                avatar: "",
                name: name,
                country: country,
                userId: userInfo().id,
                description: boi,
                rate: 0,
              });
            }}
          />
        </div>
      </div>
    </>
  );
};
