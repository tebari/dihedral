import dihedral from 'dihedral';

describe('dihedral', () => {
  it('should exist', () => {
    expect(dihedral).toBeDefined();
  });

  it('should have angular', () => {
    expect(dihedral.angular).toBeDefined();
    expect(dihedral.angular).toBe(window.angular);
  });
});
