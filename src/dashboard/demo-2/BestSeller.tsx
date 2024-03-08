import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { Cards } from '@/components/cards/frame/cards-frame';
import { formatDistanceToNow } from 'date-fns';

// JSON data is imported dynamically
import pucData from '../../demoData/puc.json';

const sellerColumns = [
  {
    title: 'Subject Names',
    dataIndex: 'name',
    key: 'name',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white/60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-l-4 rtl:rounded-r-4',
  },
  {
    title: 'Subject Code',
    dataIndex: 'scode',
    key: 'scode',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white/60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden',
  },
  {
    title: 'Last Update',
    dataIndex: 'lastupdate',
    key: 'lastupdate',
    render: (lastupdate: string) => formatDistanceToNow(new Date(lastupdate), { addSuffix: true }),
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white/60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-r-4 rtl:rounded-l-4',
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
    className:
      'ltr:pr-4 rtl:pl-4 text-light dark:text-white/60 text-[12px] py-2.5 last:text-end border-none uppercase before:hidden ltr:rounded-r-4 rtl:rounded-l-4',
  },
];

interface PucSemester {
  name: string;
  link: string;
  scode: string;
  lastupdate: string;
  author: string;
}

interface PucData {
  semOne: PucSemester[];
  semTwo: PucSemester[];
}

const BestSeller = React.memo(() => {
  const [state, setState] = useState({
    sellerTab: 'semOne',
  });

  const { sellerTab } = state;

  const pucSemData: PucData = pucData;

  const [bestSellerData, setBestSellerData] = useState<any[]>([]);

  const handleTabChange = (value: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setState({
      ...state,
      sellerTab: value,
    });
  };

  const handleSubjectNameClick = (link: string) => {
    // Redirect the user to the specified link
    if (link !== '#') {
      window.location.href = link;
    }
  };

  useEffect(() => {
    // Use a type assertion to tell TypeScript that sellerTab is a valid key
    const selectedSemester = (pucSemData as any)[sellerTab] as PucSemester[];
  
    if (selectedSemester) {
      const updatedData = selectedSemester.map((subject) => {
        const { name, link, scode, lastupdate, author } = subject;
  
        return {
          key: scode,
          name: (
            <div className="flex items-center">
              <span
                className={`font-medium capitalize text-dark dark:text-white/[.87] text-15 cursor-pointer ${
                  link === '#' ? 'text-red-500' : 'text-green-500'
                }`}
                onClick={() => handleSubjectNameClick(link)}
              >
                {name}
              </span>
            </div>
          ),
          scode,
          lastupdate,
          author,
        };
      });

      setBestSellerData(updatedData);
  }
}, [sellerTab, pucSemData]);

  return (
    <div className="h-full">
      <Cards
        isbutton={
          <ul className="flex items-center mb-0">
            <li>
              <Link
                className={
                  sellerTab === 'semOne'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary font-medium text-13'
                }
                onClick={(e) => handleTabChange('semOne', e)}
                href="#"
              >
                Semester One
              </Link>
            </li>
            <li>
              <Link
                className={
                  sellerTab === 'semTwo'
                    ? 'inline-flex items-center bg-primary-transparent dark:bg-white/10 px-3 h-8 text-primary dark:text-white/[.87] text-13 font-medium rounded-md'
                    : 'inline-flex items-center px-3 h-8 text-light dark:text-white/60 dark:hover:text-white hover:text-primary font-medium text-13'
                }
                onClick={(e) => handleTabChange('semTwo', e)}
                href="#"
              >
                Semester Two
              </Link>
            </li>
          </ul>
        }
        title={`PUC - 1 - ${sellerTab === 'semOne' ? 'Semester One' : 'Semester Two'}`}
        size="large"
        className="h-full border-none ant-card-body-p-25 ant-card-body-pt-0 ant-card-head-px-25 ant-card-head-b-none ant-card-head-title-base"
      >
        <div className="table-pl-0 hover-tr-none table-pt-15 table-responsive">
          <Table columns={sellerColumns} dataSource={bestSellerData} pagination={false} />
        </div>
      </Cards>
    </div>
  );
});

export default BestSeller;
