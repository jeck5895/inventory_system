export default {
    FETCH_USER: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            axios
                .get(`api/users/${payload}`)
                .then(response => {
                    commit("CLEAR_USER");
                    commit("SET_USER", response.data);
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    FETCH_USERS: ({ commit }, payload) => {
        let url = payload ? payload : "/api/users";

        commit("SET_LOADING", true);

        return new Promise((resolve, reject) => {
            axios
                .get(url)
                .then(response => {
                    commit("CLEAR_USERS");
                    // commit('SET_PAGINATION', response.data);
                    commit("SET_USERS", response.data);
                    setTimeout(() => {
                        commit("SET_LOADING", false);
                        resolve(response);
                    }, 1000);
                })
                .catch(error => {
                    reject(error);
                    setTimeout(() => {
                        commit("SET_LOADING", false);
                    }, 1000);
                });
        });
    },
    STORE_USER: ({ commit }, payload) => {
        commit("SET_SAVING", true);
        return new Promise((resolve, reject) => {
            axios
                .post("api/users", payload)
                .then(response => {
                    toastr.success("Success", `${response.data.message}`);
                    commit("SET_SAVING", false);
                    commit("CLEAR_USER");
                    resolve(response);
                })
                .catch(error => {
                    commit("SET_SAVING", false);
                    reject(error);
                });
        });
    },
    UPDATE_USER: ({ commit }, payload) => {
        commit("SET_SAVING", true);
        return new Promise((resolve, reject) => {
            axios
                .patch("api/users/" + payload.id, payload)
                .then(response => {
                    toastr.success("Success", `${response.data.message}`);
                    commit("SET_SAVING", false);
                    commit("CLEAR_USER");
                    resolve(response);
                })
                .catch(error => {
                    commit("SET_SAVING", false);
                    reject(error);
                });
        });
    },
    DELETE_USER: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            axios
                .delete("api/users/" + payload.id)
                .then(response => {
                    toastr.success("Success", response.data.message);
                    resolve(response);
                })
                .catch(error => {
                    commit("SET_SAVING", false);
                    if (error.response.status == 403) {
                        toastr.error("Error", error.response.data.message);
                    }
                    reject(error);
                });
        });
    }
};
