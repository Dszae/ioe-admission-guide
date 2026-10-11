import { describe, it, expect } from 'vitest';
import { 
  CUTOFFS, 
  CAMPUS_NAMES, 
  CAMPUS_DETAILS, 
  CAMPUS_SEATS, 
  ALL_PROGRAMS, 
  ADMISSION_METADATA, 
  OFFICIAL_PORTALS 
} from './admissionData.js';

describe('Admission Data Integrity', () => {
  it('contains all 5 constituent engineering campuses', () => {
    const campusKeys = Object.keys(CAMPUS_NAMES);
    expect(campusKeys).toEqual(expect.arrayContaining(['Pulchowk', 'Thapathali', 'WRC', 'ERC', 'ChEC']));
  });

  it('verifies that total constituent intake equals 2,040 seats', () => {
    let totalConstituentSeats = 0;
    Object.values(CAMPUS_SEATS).forEach(seatList => {
      seatList.forEach(seat => {
        totalConstituentSeats += seat.total;
        expect(seat.regular + seat.fullFee).toBe(seat.total);
      });
    });
    expect(totalConstituentSeats).toBe(2040);
    expect(ADMISSION_METADATA.totalConstituentSeats).toBe(2040);
  });

  it('verifies all constituent campus cutoffs have positive numerical values', () => {
    Object.entries(CUTOFFS).forEach(([campusName, programMap]) => {
      expect(CAMPUS_NAMES[campusName]).toBeDefined();
      Object.entries(programMap).forEach(([programName, feeMap]) => {
        expect(ALL_PROGRAMS).toContain(programName);
        ['Regular', 'FullFee'].forEach(feeType => {
          if (feeMap[feeType]) {
            expect(feeMap[feeType].Open).toBeGreaterThan(0);
          }
        });
      });
    });
  });

  it('confirms official portals have valid HTTPS urls', () => {
    OFFICIAL_PORTALS.forEach(portal => {
      expect(portal.url.startsWith('https://')).toBe(true);
      expect(portal.name.length).toBeGreaterThan(0);
    });
  });

  it('lists Architecture only at Chitwan Engineering Campus', () => {
    expect(Object.keys(CUTOFFS.ChEC)).toEqual(['Architecture']);
    expect(CAMPUS_SEATS.ChEC.map((seat) => seat.program)).toEqual(['Architecture']);
    expect(CAMPUS_DETAILS.ChEC.description).not.toMatch(/Computer Engineering/i);
  });

  it('checks that all campus details have complete information', () => {
    Object.values(CAMPUS_DETAILS).forEach((details) => {
      expect(details.fullName).toBeDefined();
      expect(details.location).toBeDefined();
      expect(details.established).toBeGreaterThan(1900);
      expect(details.website.startsWith('https://')).toBe(true);
      expect(details.totalSeats).toBeGreaterThan(0);
    });
  });
});
