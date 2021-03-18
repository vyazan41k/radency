import React from 'react';
import './Colums.scss';

import Id from './Items/Id';
import Name from './Items/Name';
import Phone from './Items/Phone';
import Email from './Items/Email';
import Age from './Items/Age';
import Experience from './Items/Experience';
import YearlyIncome from './Items/YearlyIncome';
import Children from './Items/Children';
import LicenseStates from './Items/LicenseStates';
import ExpirationDate from './Items/ExpirationDate';
import LicenseNumber from './Items/LicenseNumber';
import Duplicate from './Items/Duplicate';

export default function Colums2({ data, id }) {
  const name = [];
  const phone = [];
  const email = [];
  const age = [];
  const experience = [];
  const yearlyIncome = [];
  const children = [];
  const licenseStates = [];
  const expirationDate = [];
  const licenseNumber = [];

  for (const key in data) {
    if (key === 'full_name') {
      name.push(data[key]);
    }

    if (key === 'phone') {
      phone.push(data[key]);
    }

    if (key === 'email') {
      email.push(data[key]);
    }

    if (key === 'age') {
      age.push(data[key]);
    }

    if (key === 'experience') {
      experience.push(data[key]);
    }

    if (key === 'yearly_income') {
      yearlyIncome.push(data[key]);
    }

    if (key === 'has_children') {
      children.push(data[key]);
    }

    if (key === 'license_states') {
      licenseStates.push(data[key]);
    }

    if (key === 'expiration_date') {
      expirationDate.push(data[key]);
    }

    if (key === 'license_number') {
      licenseNumber.push(data[key]);
    }
  }

  return (
    <tr>
      <Id id={id} />
      <Name name={name} />
      <Phone phone={String(phone)} />
      <Email email={email} />
      <Age age={String(age)} />
      <Experience experience={String(experience)} age={String(age)} />
      <YearlyIncome yearlyIncome={Number(yearlyIncome)} />
      <Children children={String(children)} />
      <LicenseStates licenseStates={licenseStates} />
      <ExpirationDate expirationDate={String(expirationDate)} />
      <LicenseNumber licenseNumber={String(licenseNumber)} />
      <Duplicate />
    </tr>
  );
}
