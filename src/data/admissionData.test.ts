import { describe, it, expect } from 'vitest';
import { 
  CUTOFFS, 
  CAMPUS_NAMES, 
  CAMPUS_DETAILS, 
  CAMPUS_SEATS, 
  ALL_PROGRAMS, 
  ADMISSION_METADATA, 
  OFFICIAL_PORTALS,
  FINANCIALS 
} from './admissionData';
import type { CampusKey } from '../types';

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
      expect(CAMPUS_NAMES[campusName as CampusKey]).toBeDefined();
      Object.entries(programMap).forEach(([programName, feeMap]) => {
        expect(ALL_PROGRAMS).toContain(programName);
        (['Regular', 'FullFee'] as const).forEach(feeType => {
          if (feeMap[feeType]) {
            expect(feeMap[feeType]?.Open).toBeGreaterThan(0);
          }
        });
      });
    });
  });

  it('confirms official portals have valid HTTP/HTTPS urls', () => {
    OFFICIAL_PORTALS.forEach(portal => {
      expect(portal.url).toMatch(/^https?:\/\//);
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

  it('verifies 4-year financial investment categories including 2083/084 fee data', () => {
    const keys = Object.keys(FINANCIALS);
    expect(keys).toEqual(['Regular', 'FullFee', 'Foreign', 'Affiliated']);
    expect(FINANCIALS.Regular.tuition).toBe('Rs. 63,087');
    expect(FINANCIALS.FullFee.tuition).toBe('Rs. 5,45,832');
    expect(FINANCIALS.Foreign.tuition).toBe('Rs. 14,50,761');
    expect(FINANCIALS.Regular.semBreakdown?.firstPayment).toBe('Rs. 17,669');
    expect(FINANCIALS.FullFee.semBreakdown?.firstPayment).toBe('Rs. 2,16,470');
    expect(FINANCIALS.Foreign.semBreakdown?.firstPayment).toBe('Rs. 5,35,599');
  });
});

