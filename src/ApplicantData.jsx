import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

const ApplicantData = () => {
  const { id } = useParams(); 

  const safeParsefromlocalstorage = (key) => {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (err) {
      alert(`Error parsing ${key}: ${err.message}`);
      return null;
    }
  };

  const allapp = useMemo(() => {
    const apps = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('applicationdata-')) {
        const data = safeParsefromlocalstorage(key);
        if (Array.isArray(data)) {
          apps.push(...data.filter(item => item !== null));
        }
      }
    }
    return apps;
  }, []); 

  const applicationforthisjob = useMemo(() => {
    if (!id) return [];
    return allapp.filter(item => (item.jobID) === (id));
  }, [id, allapp]);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 pb-5 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900">
            Applicants for job <span className="text-indigo-600">#{id}</span>
          </h1>
          <div className="mt-2 text-sm text-gray-500">
            {applicationforthisjob.length} applicant{applicationforthisjob.length !== 1 ? 's' : ''} found
          </div>
        </div>

        {applicationforthisjob.length ? (
          <div className="space-y-4">
            {applicationforthisjob.map((data, index) => (
              <div
                key={data.id || index}
                className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col sm:flex-row gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-700">
                    {(data.name || data.applicantName || 'U')
                      .toString()
                      .split(' ')
                      .map((w) => w[0])
                      .slice(0,2)
                      .join('')
                      .toUpperCase()}
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-500">Name</div>
                    <div className="text-base font-medium text-gray-900">
                      {data.name || data.applicantName || '—'}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-500">Email</div>
                    <div className="text-base font-medium text-gray-900">
                      {data.email || '—'}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-500">Phone</div>
                    <div className="text-base font-medium text-gray-900">
                      {data.phone || data.phoneNo || '—'}
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 flex items-start sm:items-center">
                  <div className="inline-flex items-center gap-2">
                    <div className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold">
                      Pending
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <p className="text-gray-500">No applicants found for this job</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ApplicantData;