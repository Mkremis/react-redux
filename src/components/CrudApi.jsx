import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { helpHttp } from '../helpers/helpHttp';
import {
  readAllAction,
  noData,
  createAction,
  updateAction,
  deleteAction,
} from '../actions/crudActions';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
  const state = useSelector((state) => state);
  const { db } = state.crud;
  const dispatch = useDispatch();
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = 'http://localhost:5000/santos';

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          dispatch(readAllAction(res));
          setError(null);
        } else {
          dispatch(noData());
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);
  const createData = (data) => {
    data.id = Date.now();
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };
    api.post(url, options).then((res) => {
      if (!res.err) {
        dispatch(createAction(res));
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        dispatch(updateAction(res));
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { 'content-type': 'application/json' },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          dispatch(deleteAction(id));
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
