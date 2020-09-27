import React, { useEffect, useState } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
	const WithErrorHandler = (props) => {
		const [error, setError] = useState(null);

		const requestInterceptor = axios.interceptors.request.use((req) => {
			setError(null);
			return req;
		});

		const responseInterceptor = axios.interceptors.response.use(
			(res) => res,
			(err) => {
				setError(err);
				console.log('[WithErrorHandler] ', err);
				return Promise.reject(err);
			}
		);

		useEffect(() => {
			return () => {
				axios.interceptors.request.eject(requestInterceptor);
				axios.interceptors.response.eject(responseInterceptor);
			};
		});

		return (
			<>
				<Modal show={error !== null} modalClosed={() => setError(null)}>
					{error !== null ? error.message : null}
				</Modal>
				<WrappedComponent {...props} />
			</>
		);
	};

	return WithErrorHandler;
};

export default withErrorHandler;
