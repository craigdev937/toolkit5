import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ContAPI } from "../global/ContAPI";

export const Home = (): JSX.Element => {
    const { error, isLoading, data } = 
    ContAPI.useFetchAllQuery();
    const [deleteContact] = ContAPI.useDeleteMutation();
    
    React.useEffect(() => {
        if (error) toast.error("Something went wrong!");
    }, [error]);

    const handleDelete = async (_id: string) => {
        if (window.confirm("Are you sure you want to delete?")) {
            await deleteContact(_id);
            toast.success("The Contact was Deleted!");
        };
    };

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <main>
            <Link to="/add">
                <button 
                    className="btn btn-add"
                    >Add Contact
                </button>
            </Link>
            <br />
            <br />
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index: any) => (
                        <tr key={item._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>
                                <Link to={`/edit/${item._id}`}>
                                    <button 
                                        className="btn btn-edit"
                                        >Edit
                                    </button>
                                </Link>
                                <button 
                                    className="btn btn-delete"
                                    onClick={() => handleDelete(item._id!)}
                                    >Delete
                                </button>
                                <Link to={`/info/${item._id}`}>
                                    <button 
                                        className="btn btn-view"
                                        >View
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
};



